// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
module.exports = {
  themeConfig: {
    metadata: [{ name: 'robots', content: 'noindex, nofollow' }],
    // This would become <meta name="keywords" content="cooking, blog"/> in the generated HTML
  },
  noIndex: true,
};
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Happy Docs',
  tagline: 'Docs for Happy',
  url: 'https://docs.wdsj.one/',
  baseUrl: '/Doc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // @ts-ignore
  onBrokenLinks: 'ignore',
  organizationName: 'Happy', // Usually your GitHub org/user name.
  projectName: 'Happy Docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Happy-clo/Doc/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Happy Doc',
        logo: {
          alt: 'icon',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://ai.wdsj.one/',
            label: 'ChatWeb',
            position: 'right',
          },
          {
            href: 'https://bingai.wdsj.one/',
            label: 'Bing',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: '9a34f1ab99b281b2863d5aa483bf4d6c',
        indexName: 'happy',
        appId: 'Z5WW3ZRWVZ', // Optional, if you run the DocSearch crawler on your own
        algoliaOptions: {} // Optional, if provided by Algolia
      },
    }),
};

module.exports = config;
