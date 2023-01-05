module.exports = {
  extends: ['gitmoji'],
  rules: {
    'header-max-length': [0, 'always', 75],
    'type-enum': [
      2,
      'always',
      [
        'style',
        'perf',
        'prune',
        'fix',
        'hotfix',
        'feat',
        'docs',
        'deploy',
        'ui',
        'init',
        'test',
        'security',
        'lint',
        'wip',
        'fixci',
        'downgrade',
        'upgrade',
        'pindep',
        'ci',
        'analytics',
        'refactor',
        'adddep',
        'rmdep',
        'config',
        'i18n',
        'typo',
        'poo',
        'revert',
        'merge',
        'updep',
        'compat',
        'mv',
        'license',
        'breaking',
        'assets',
        'review',
        'a11y',
        'docscode',
        'oldmybeer',
        'texts',
        'addlog',
        'rmlog',
        'ux',
        'arch',
        'responsive',
        'mocking',
        'egg',
        'ignore',
        'experiment',
        'seo',
        'seed',
        'animation',
      ],
    ],
  },
};
