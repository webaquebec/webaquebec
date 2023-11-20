import fetch from 'node-fetch';

const initBody = (email) => ({
  AuthKey: {
    idKey: process.env.NEWSLETTER_API_AUTH_ID,
    Key: process.env.NEWSLETTER_API_AUTH_KEY,
  },
  idProject: process.env.NEWSLETTER_API_PROJECT_ID,
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
      await fetch(process.env.NEWSLETTER_API_ENDPOINT, {
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
