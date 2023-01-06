module.exports = {
  types: [
    {
      value: ':art: style',
      name: '🎨 \tImproving structure / format of the code.',
    },
    {
      value: ':zap: perf',
      name: '⚡️ \tImproving performance.',
    },
    { value: ':fire: prune', name: '🔥  \tRemoving code or files.' },
    { value: ':bug: fix', name: '🐛  \tFixing a bug.' },
    {
      value: ':ambulance: hotfix',
      name: '🚑  \tCritical hotfix.',
    },
    {
      value: ':sparkles: feat',
      name: '✨ \tIntroducing new features.',
    },
    {
      value: ':pencil: docs',
      name: '📝 \tAdding or updating docs.',
    },
    {
      value: ':rocket: deploy',
      name: '🚀 \tDeploying stuff.',
    },
    {
      value: ':lipstick: ui',
      name: '💄 \tUpdating the UI and style files.',
    },
    {
      value: ':tada: init',
      name: '🎉 \tInitial commit.',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ \tAdding tests.',
    },
    {
      value: ':lock: security',
      name: '🔒 \tFixing security issues.',
    },
    {
      value: ':rotating_light: lint',
      name: '🚨 \tRemoving linter warnings.',
    },
    {
      value: ':construction: wip',
      name: '🚧 \tWork in progress.',
    },
    {
      value: ':green_heart: fixci',
      name: '💚 \tFixing CI Build.',
    },
    {
      value: ':arrow_down: downgrade',
      name: '⬇️ \tDowngrading dependencies.',
    },
    {
      value: ':arrow_up: upgrade',
      name: '⬆️ \tUpgrading dependencies.',
    },
    {
      value: ':pushpin: pindep',
      name: '📌 \tPinning dependencies to specific versions.',
    },
    {
      value: ':construction_worker: ci',
      name: '👷 \tAdding CI build system.',
    },
    {
      value: ':chart_with_upwards_trend: analytics',
      name: '📈 \tAdding analytics or tracking code.',
    },
    {
      value: ':recycle: refactor',
      name: '♻️ \tRefactoring code.',
    },
    {
      value: ':heavy_plus_sign: adddep',
      name: '➕ \tAdding a dependency.',
    },
    {
      value: ':heavy_minus_sign: rmdep',
      name: '➖ \tRemoving a dependency.',
    },
    {
      value: ':wrench: config',
      name: '🔧 \tChanging configuration files.',
    },
    {
      value: ':globe_with_meridians: i18n',
      name: '🌐 \tInternationalization and localization.',
    },
    {
      value: ':pencil2: typo',
      name: '✏️ \tFixing typos.',
    },
    {
      value: ':poop: poo',
      name: '💩 \tWriting bad code that needs to be improved.',
    },
    { value: ':rewind: revert', name: '⏪️ \tReverting changes.' },
    {
      value: ':twisted_rightwards_arrows: merge',
      name: '🔀 \tMerging branches.',
    },
    {
      value: ':package: updep',
      name: '📦 \tUpdating compiled files or packages.',
    },
    {
      value: ':alien: compat',
      name: '👽 \tUpdating code due to external API changes.',
    },
    {
      value: ':truck: mv',
      name: '🚚 \tMoving or renaming files.',
    },
    {
      value: ':page_facing_up: license',
      name: '📄 \tAdding or updating license.',
    },
    {
      value: ':boom: breaking',
      name: '💥 \tIntroducing breaking changes.',
    },
    {
      value: ':bento: assets',
      name: '🍱 \tAdding or updating assets.',
    },
    {
      value: ':ok_hand: review',
      name: '👌 \tUpdating code due to code review changes.',
    },
    {
      value: ':wheelchair: a11y',
      name: '♿️ \tImproving accessibility.',
    },
    {
      value: ':bulb: docscode',
      name: '💡 \tDocumenting source code.',
    },
    {
      value: ':beers: holdmybeer',
      name: '🍻 \tWriting code drunkenly.',
    },
    {
      value: ':speech_balloon: texts',
      name: '💬 \tUpdating text and literals.',
    },
    {
      value: ':loud_sound: addlog',
      name: '🔊 \tAdding logs.',
    },
    {
      value: ':mute: rmlog',
      name: '🔇 \tRemoving logs.',
    },
    {
      value: ':children_crossing: ux',
      name: '🚸 \tImproving user experience / usability.',
    },
    {
      value: ':building_construction: arch',
      name: '🏗 \tMaking architectural changes.',
    },
    {
      value: ':iphone: responsive',
      name: '📱 \tWorking on responsive design.',
    },
    {
      value: ':clown_face: mocking',
      name: '🤡 \tMocking things.',
    },
    {
      value: ':egg: egg',
      name: '🥚 \tAdding an easter egg.',
    },
    {
      value: ':see_no_evil: ignore',
      name: '🙈 \tAdding or updating a .gitignore file.',
    },
    {
      value: ':alembic: experiment',
      name: '⚗ \tExperimenting new things.',
    },
    {
      value: ':mag: seo',
      name: '🔍 \tImproving SEO.',
    },
    {
      value: ':seedling: seed',
      name: '🌱 \tAdding or updating seed files.',
    },
    {
      value: ':dizzy: animation',
      name: '💫 \tAdding or updating animations and transitions.',
    },
  ],
  skipEmptyScopes: true,
  upperCaseSubject: true,
  allowBreakingChanges: ['feat', 'fix', 'boom'],
  subjectLimit: 75,
  // scopes: [
  //   { name: 'config' },
  //   { name: 'components' },
  //   { name: 'global' },
  //   { name: 'media' },
  //   { name: 'styles' },
  //   { name: 'pages' },
  //   { name: 'templates' },
  //   { name: 'views' },
  // ],
  // scopeOverrides: {
  //   fix: [
  //     { name: 'merge' },
  //     { name: 'style' },
  //     { name: 'hotfix' },
  //   ],
  // },
  // allowCustomScopes: true,
};
