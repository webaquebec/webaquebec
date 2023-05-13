import fetch from 'node-fetch';

const initBody = (email) => ({
  AuthKey: {
    idKey: process.env.GATSBY_NEWSLETTER_AUTH_ID,
    Key: process.env.GATSBY_NEWSLETTER_AUTH_KEY,
  },
  idProject: process.env.GATSBY_NEWSLETTER_PROJECT_ID,
  Records: [
    {
      ID: {
        key_f_EMail: email,
      },
      Data: {
        f_EMail: email,
      },
    },
  ],
  MergeOptions: {
    AllowInsert: true,
  },
});

/**
 *
 * @param {req} request
 * @param {res} response
 * @returns
 */
async function addContact({ body }, res) {
  const { email } = body;

  const newsletterBody = JSON.stringify(initBody(email));

  try {
    const response = await (
      await fetch(process.env.GATSBY_NEWSLETTER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: newsletterBody,
      })
    ).json();

    const success = response?.Success && response?.UpdatedRecords === 0;

    res.status(200).json({ success });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

/**
 *
 * @param {req} request
 * @param {res} response
 * @returns
 */
export default async function newsletterRequestHandler(req, res) {
  if (req.method === 'POST') {
    return addContact(req, res);
  }

  return res.status(405).json('405 Not Allowed');
}
