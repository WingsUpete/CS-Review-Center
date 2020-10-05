const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'CS Review Center',
  tagline: 'Computer Science, Review',
  url: 'https://wingsupete.github.io',
  baseUrl: '/CS-Review-Center/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'WingsUpete', // Usually your GitHub org/user name.
  projectName: 'CS-Review-Center', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'CS Review Center',
      logo: {
        alt: 'CS-Review-Center Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/WingsUpete/CS-Review-Center',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/tutorial/doc1/',
            },
            {
              label: 'Second Doc',
              to: 'docs/tutorial/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WingsUpete/CS-Review-Center',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Peter S. Built with Docusaurus.`,
    },
    sidebarCollapsible: true,
    prism: {
      // theme: require('prism-react-renderer/themes/dracula'),
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/WingsUpete/CS-Review-Center/edit/master/cs-review-center/',
          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/WingsUpete/CS-Review-Center/edit/master/cs-review-center/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
