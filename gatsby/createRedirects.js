/* eslint-env node, commonjs */

module.exports = async ({ actions, reporter }) => {
  const { createRedirect } = actions;

  const redirects = [
    {
      fromPath: '/blogue/faq-waq21',
      toPath: '/faq',
    },
  ];

  redirects.forEach((redirect) => {
    const { fromPath, toPath } = redirect;

    reporter.info(`creating redirect: ${fromPath} to ${toPath}`);

    createRedirect({
      fromPath,
      toPath,
      isPermanent: true,
    });
  });
};
