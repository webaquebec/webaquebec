const fs = require('fs');

// const path = require(`path`);
const slugify = require(`../src/utils/strings/slugify.js`);

const planningFields = `
  id
  beginsAt
  endsAt
  categories
  configuration {
    maxSeats
  }
  description
  descriptionTranslations {
    language
    value
  }
  htmlDescription
  isPrivate
  place
  title
  titleTranslations {
    language
    value
  }
  totalAttendees
  twitterHashtag
  type
  speakers {
    id
    firstName
    lastName
    biography
    email
    websiteUrl
    organization
    jobTitle
    socialNetworks {
      profile
      type
    }
    photoUrl
`;

const getPreviousEditions = async ({ graphql, reporter, variables }) => {
  const { eventIds, page, pageSize } = variables;
  const result = await graphql(`
    {
      swapcard {
        edition2023: plannings(
          eventId: "${eventIds[2023]}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
            ${planningFields}
          }
        }
        edition2022: plannings(
          eventId: "${eventIds[2022]}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
            ${planningFields}
          }
        }
        edition2021: plannings(
          eventId: "${eventIds[2021]}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
            ${planningFields}
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `[archives] There was an error loading plannings from Swapcard`,
      result.errors
    );
    return;
  }

  const {
    swapcard: { edition2021, edition2022, edition2023 },
  } = result.data;

  const editions = [edition2023, edition2022, edition2021];

  // eslint-disable-next-line consistent-return
  return editions;
};

const archiveProgram = async ({ editions, reporter }) => {
  editions.forEach((plannings) => {
    const eventDate = new Date(plannings[0].beginsAt);
    const eventYear = eventDate.getFullYear();

    const path = `./archives/${eventYear}`;

    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });

    reporter.info(`[archives] archive program from edition ${eventYear}`);

    reporter.info(`[archives] total sessions: ${plannings.length}`);

    plannings.forEach((planning) => {
      const slug = slugify(planning.title);
      reporter.info(`[archives] ${slug}`);
    });

    const fileName = `${path}/program-${eventYear}.json`;

    reporter.info(`[archives] create archive file: ${fileName}`);

    fs.writeFileSync(fileName, JSON.stringify(plannings));
  });
};

module.exports = async ({ graphql, reporter }) => {
  const variables = {
    eventIds: {
      2023: `${process.env.SWAPCARD_EVENT_ID_2023}`,
      2022: `${process.env.SWAPCARD_EVENT_ID_2022}`,
      2021: `${process.env.SWAPCARD_EVENT_ID_2021}`,
    },
    page: 1,
    pageSize: 300,
  };

  reporter.info('[archives] start fetching data from Swapcard');

  const editions = await getPreviousEditions({ graphql, reporter, variables });

  if (!editions?.length) {
    reporter.error('[archives] No edition found.');
    return;
  }

  reporter.info(`[archives] total editions: ${editions.length}`);

  await archiveProgram({ editions, reporter, variables });
};
