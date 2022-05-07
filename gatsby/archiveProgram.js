const fs = require('fs');

// const path = require(`path`);
const slugify = require(`../src/utils/strings/slugify.js`);

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
          }
        }
      }
    }
  `);

  if (plannings.errors) {
    reporter.panicOnBuild(
      `[archives] There was an error loading plannings from Swapcard`,
      plannings.errors
    );
    return;
  }

  // eslint-disable-next-line consistent-return
  return plannings;
};

const archiveProgram = async ({ plannings, reporter }) => {
  const eventDate = new Date(plannings[0].beginsAt);
  const eventYear = eventDate.getFullYear();

  const path = `./archives/${eventYear}`;

  if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });

  reporter.info(`[archives] archive program from ${eventYear}`);

  plannings.forEach((planning) => {
    const slug = slugify(planning.title);
    reporter.info(`[archives] ${slug}`);
  });

  const fileName = `${path}/program-${eventYear}.json`;

  reporter.info(`[archives] create archive file: ${fileName}`);

  fs.writeFileSync(fileName, JSON.stringify(plannings));
};

module.exports = async ({ graphql, reporter }) => {
  const variables = {
    eventId: `${process.env.SWAPCARD_EVENT_ID_2021}`,
    page: 1,
    pageSize: 200,
  };

  reporter.info('[archives] start fetching data from Swapcard');

  const plannings = await getPlannings({ graphql, reporter, variables });

  if (!plannings.length) {
    reporter.error('[archives] No plannings found.');
    return;
  }

  reporter.info(`[archives] total sessions: ${plannings.length}`);

  await archiveProgram({ plannings, reporter, variables });
};
