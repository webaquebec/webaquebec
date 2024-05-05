/* eslint-env node, commonjs */

module.exports = async ({ actions, reporter }) => {
  const { createRedirect } = actions;

  const redirects = [
    {
      fromPath: '/blogue/faq-waq21',
      toPath: '/faq',
      isPermanent: true,
    },
    {
      fromPath: '/programmation/',
      toPath: '/programmation/2024/',
      isPermanent: false,
    },
    {
      fromPath: '/a-propos/',
      toPath: '/a-propos/evenement/',
      isPermanent: false,
    },
    {
      fromPath: '/waqademie',
      toPath: '/',
      isPermanent: false,
      force: true,
    },
  ];

  redirects.forEach((redirect) => {
    const { fromPath, toPath, isPermanent, force } = redirect;

    reporter.info(`creating redirect: ${fromPath} to ${toPath}`);

    createRedirect({
      fromPath,
      toPath,
      isPermanent,
      force,
    });
  });
};
