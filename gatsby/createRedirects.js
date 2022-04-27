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
      fromPath: '/programmation',
      toPath: '/programmation/2022',
      isPermanent: false,
    },
    {
      fromPath: '/a-propos',
      toPath: '/a-propos/evenement',
      isPermanent: false,
    },
  ];

  redirects.forEach((redirect) => {
    const { fromPath, toPath, isPermanent } = redirect;

    reporter.info(`creating redirect: ${fromPath} to ${toPath}`);

    createRedirect({
      fromPath,
      toPath,
      isPermanent,
    });
  });
};
