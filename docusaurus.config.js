// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "hhhhe.的小站",
  tagline: "Never Knows Best",
  favicon: "img/favicon.ico",

  url: "https://cuzmarlboro.github.io",
  baseUrl: "/",
  organizationName: "cuzmarlboro",
  projectName: "cuzmarlboro.github.io",
  onBrokenLinks: "ignore",
  // onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    // defaultLocale: "zh-Hans",
    // locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      docs: {
        sidebar: {
          hideable: true,
        },
      },

      navbar: {
        title: "hhhhe.的博客",
        hideOnScroll: true,
        items: [
          {
            activeBasePath: "docs", // 路径
            position: "right",
            label: "前端",
            items: [
              {
                label: "Html",
                to: "/docs/FE/Html",
              },
              {
                label: "CSS",
                to: "/docs/FE/CSS",
              },
              {
                label: "JavaSciprt",
                to: "/docs/FE/JavaSciprt",
              },
              {
                label: "TypeSciprt ",
                to: "/docs/FE/TypeSciprt ",
              },
            ],
          },
          {
            label: "后端",
            position: "right",
            items: [
              {
                label: "Node.js",
                to: "/docs/BE/Node",
              },
            ],
          },
          // { to: "/blog", label: "Blog", position: "right" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
          // {
          //   type: "search",
          //   position: "right",
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: "UP7UJZ4X6B",
        apiKey: "9031ebe44f33daca1477b980caf60d58",
        indexName: "cuzmarlboro",
      },
    }),
};

module.exports = config;
