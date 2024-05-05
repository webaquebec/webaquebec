const path = require(`path`);
const groupBy = require(`../src/utils/groupBy.js`);
const slugify = require(`../src/utils/strings/slugify.js`);

/**
 * Session types allowed to be displaying
 * Blacklisted for now:
 *   - intermission
 *   - presentiel
 *   - zone-internationale
 */
const allowedTypes = [
  '5-a-7',
  'activite',
  'atelier',
  'conference',
  'conferences',
  'qanda',
  'contenu-sur-demande',
  'table-ronde',
  'keynote',
  'panel',
  'rediffusion',
  // 'pitch-ton-waq',
  // 'reseautage',
  // 'en-direct',
];

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All Plannings from Swapcard. If there are any GraphQL error it throws an error
 * Otherwise it will return the plannings found 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
const getPlannings = async ({ graphql, reporter, variables }) => {
  const { eventIds, page, pageSize } = variables;
  const result = await graphql(`
    {
      edition2024: swapcard {
        plannings(
          eventId: "${eventIds[2024]}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
          beginsAt
          id
          title
          type
        }
      }

      edition2023: swapcard {
        plannings(
          eventId: "${eventIds[2023]}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
          beginsAt
          id
          title
          type
        }
      }

      edition2022: swapcard {
        plannings(
          eventId: "${eventIds[2022]}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
          beginsAt
          id
          title
          type
        }
      }

      edition2021: swapcard {
        plannings(
          eventId: "${eventIds[2021]}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
          beginsAt
          id
          title
          type
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading plannings from Swapcard`,
      result.errors
    );
    return;
  }

  const {
    data: { edition2021, edition2022, edition2023, edition2024 },
  } = result;

  const plannings = [
    ...edition2022.plannings,
    ...edition2021.plannings,
    ...edition2023.plannings,
    ...edition2024.plannings,
  ];
  // const plannings = { edition2022, edition2021 };

  // eslint-disable-next-line consistent-return
  return plannings;
};

const createSession = async ({
  plannings,
  dates,
  actions,
  reporter,
  variables,
}) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Program/Session/Session.jsx');

  const { eventIds, page, pageSize } = variables;

  const dayNumber = (date) => {
    const options = { day: '2-digit' };
    const newDate = new Date(date);
    return newDate.toLocaleDateString('fr-ca', options);
  };

  reporter.info('creating session pages:');

  plannings
    .filter(
      (planning) =>
        planning.type && allowedTypes.includes(slugify(planning.type))
    )
    .forEach(async (planning) => {
      const { beginsAt, title, id } = planning;
      const eventYear = new Date(beginsAt).getFullYear();

      const sessionPath = `/programmation/${slugify(title)}/`;

      const eventDates = dates[eventYear];

      const pageIndex = eventDates.findIndex(
        (d) => dayNumber(d) === dayNumber(beginsAt)
      );

      reporter.info(sessionPath);

      createPage({
        path: sessionPath,
        component: template,
        context: {
          eventId: eventIds[eventYear],
          page,
          pageSize,
          planningIds: [id],
          pageNumber: pageIndex + 1,
          isLastPage:
            eventYear === '2021' && eventDates.length === pageIndex + 1,
        },
      });
    });
};

const createProgram = async ({
  plannings,
  dates,
  actions,
  reporter,
  variables,
}) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Program/Program.jsx');

  const totalPages = dates.length;

  reporter.info('creating Program pages:');

  Object.entries(dates).forEach(async (year) => {
    const eventYear = year[0];
    const eventDates = year[1];

    eventDates.forEach(async (date, index, array) => {
      const getPagePath = (page) => {
        if (page <= 0 || page > totalPages) return null;

        return page === 1
          ? `/programmation/${eventYear}/`
          : `/programmation/${eventYear}/${page}/`;
      };

      const pageNumber = index + 1;

      reporter.info(getPagePath(pageNumber));

      const planningIds = plannings[date]
        .filter(
          (current) =>
            current.type && allowedTypes.includes(slugify(current.type))
        )
        .map((current) => current.id);

      const pagePaths = array.map((_, i) => getPagePath(i + 1));

      const { eventIds, page, pageSize } = variables;
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      createPage({
        path: getPagePath(pageNumber),
        // use the schedule template as the page component
        component: template,

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          eventId: eventIds[eventYear],
          page,
          pageSize,
          pageNumber,
          planningIds,
          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
          pagePaths,
          // eventYear,
          eventDates,
        },
      });
    });
  });
};

module.exports = async ({ graphql, actions, reporter }) => {
  const variables = {
    eventIds: {
      2024: `${process.env.SWAPCARD_EVENT_ID}`,
      2023: `${process.env.SWAPCARD_EVENT_ID_2023}`,
      2022: `${process.env.SWAPCARD_EVENT_ID_2022}`,
      2021: `${process.env.SWAPCARD_EVENT_ID_2021}`,
    },
    page: 1,
    pageSize: 250,
  };

  reporter.info('start fetching data from Swapcard');

  // const plannings = await getPlannings({ graphql, reporter, variables });
  const plannings = await getPlannings({ graphql, reporter, variables });

  if (!plannings.length) {
    reporter.error('No session found.');
    return;
  }

  reporter.info(`total sessions: ${plannings.length}`);

  const dateNormalized = (item) => {
    const date = new Date(item.beginsAt);
    // Force converting to locale date string to avoid date shifting on server
    return date.toLocaleDateString('fr-ca').replace(/-/g, '/');
  };

  const planningsGroupByDate = groupBy(plannings, dateNormalized);

  const datesGroupByYear = Object.keys(planningsGroupByDate).reduce(
    (acc, current) => {
      const year = new Date(current).getFullYear();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(current);
      return acc;
    },
    {}
  );

  /**
   * FIXME: Remove last date from 2021 edition temporarily until fixing it
   */
  datesGroupByYear[2021].pop();

  await createSession({
    plannings,
    dates: datesGroupByYear,
    actions,
    reporter,
    variables,
  });

  await createProgram({
    plannings: planningsGroupByDate,
    dates: datesGroupByYear,
    actions,
    reporter,
    variables,
  });
};
