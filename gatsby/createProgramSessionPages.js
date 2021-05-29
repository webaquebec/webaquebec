const path = require(`path`);
const groupBy = require(`../src/utils/groupBy.js`);
const slugify = require(`../src/utils/strings/slugify.js`);

/**  This function queries Gatsby's GraphQL server and asks for
 * All Plannings from Swapcard. If there are any GraphQL error it throws an error
 * Otherwise it will return the plannings found 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
const getPlannings = async ({ graphql, reporter, variables }) => {
  const { eventId, page, pageSize } = variables;
  const {
    data: {
      swapcard: { plannings },
    },
  } = await graphql(`
    {
      swapcard {
        plannings(
          eventId: "${eventId}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
          beginsAt
          id
          title
        }
      }
    }
  `);

  if (plannings.errors) {
    reporter.panicOnBuild(
      `There was an error loading plannings from Swapcard`,
      plannings.errors
    );
    return;
  }

  // eslint-disable-next-line consistent-return
  return plannings;
};

const createSession = async ({ plannings, actions, reporter, variables }) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Program/Session/Session.jsx');

  const { eventId, page, pageSize } = variables;

  const dayNumber = (item) => {
    const options = { day: '2-digit' };
    const date = new Date(item.beginsAt);
    return date.toLocaleDateString('fr-ca', options);
  };

  const planningsGroupByDate = groupBy(plannings, dayNumber);
  const eventDates = Object.keys(planningsGroupByDate);

  reporter.info('creating session pages:');

  plannings.map(async (planning) => {
    const { title, id } = planning;

    const sessionPath = `/programmation/${slugify(title)}/`;

    const pageIndex = eventDates.findIndex((d) => d === dayNumber(planning));

    reporter.info(sessionPath);

    createPage({
      path: sessionPath,
      component: template,
      context: {
        eventId,
        page,
        pageSize,
        planningIds: [id],
        pageNumber: pageIndex + 1,
      },
    });
  });
};

const createProgram = async ({ plannings, actions, reporter, variables }) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Program/Program.jsx');

  // Group plannings by date
  const eventDate = new Date(plannings[0].beginsAt);
  const eventYear = eventDate.getFullYear();

  const dayName = (item) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const date = new Date(item.beginsAt);
    return date.toLocaleDateString('fr-ca', options);
  };
  const planningsGroupByDate = groupBy(plannings, dayName);

  const eventDates = Object.keys(planningsGroupByDate);
  const totalPages = eventDates.length;

  reporter.info('creating Program pages:');

  eventDates.forEach(async (date, index, array) => {
    const pageNumber = index + 1;

    const getPagePath = (page) => {
      if (page <= 0 || page > totalPages) return null;

      return page === 1
        ? `/programmation/${eventYear}`
        : `/programmation/${eventYear}/${page}`;
    };

    reporter.info(getPagePath(pageNumber));

    const planningIds = planningsGroupByDate[date].map((current) => current.id);

    const pagePaths = array.map((_, i) => getPagePath(i + 1));

    const { eventId, page, pageSize } = variables;
    // createPage is an action passed to createPages
    // See https://www.gatsbyjs.com/docs/actions#createPage for more info
    createPage({
      path: getPagePath(pageNumber),
      // use the schedule template as the page component
      component: template,

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        eventId,
        page,
        pageSize,
        pageNumber,
        planningIds,
        nextPagePath: getPagePath(pageNumber + 1),
        previousPagePath: getPagePath(pageNumber - 1),
        pagePaths,
        eventDates,
      },
    });
  });
};

module.exports = async ({ graphql, actions, reporter }) => {
  const variables = {
    eventId: `${process.env.SWAPCARD_EVENT_ID}`,
    page: 1,
    pageSize: 100,
  };

  reporter.info('start fetching data from Swapcard');

  const plannings = await getPlannings({ graphql, reporter, variables });

  if (!plannings.length) {
    reporter.error('No session found.');
    return;
  }

  reporter.info(`total sessions: ${plannings.length}`);

  await createSession({ plannings, actions, reporter, variables });

  await createProgram({ plannings, actions, reporter, variables });
};
