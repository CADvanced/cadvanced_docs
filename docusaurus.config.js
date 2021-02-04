module.exports = {
  title: 'CADvanced documentation',
  tagline: 'Next generation roleplay systems.',
  url: 'https://docs.cadvanced.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cadvanced_fav.ico',
  organizationName: 'CADvanced', // Usually your GitHub org/user name.
  projectName: 'cadvanced_docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CADvanced',
      logo: {
        alt: 'cadvanced_logo',
        src: 'img/cadvanced_logo.png  ',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'intro',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'https://cadvanced.app/youtube',
          activeBasePath: '/',
          label: 'Youtube',
          position: 'left',
        },
        {
          to: 'https://cadvanced.app/discord',
          activeBasePath: '/',
          label: 'Discord',
          position: 'left',
        },
        {
          to: 'https://cadvanced.app/mdt',
          activeBasePath: '/',
          label: 'GitHub',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/intro',
            },
            {
              label: 'Contact us',
              to: 'mail:support@cadvanced.app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CADvanced. Next generation roleplay.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/CADvanced/cadvanced_docs/edit/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
