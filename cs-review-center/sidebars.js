module.exports = {
  docs: [
    {
      type: 'category',
      label: 'CS Review Center',
      collapsed: false,
      items: [{
        type: 'category',
        label: 'OOAD',
        items: ['OOAD/UML'],
      }]
    },
    {
      type: 'category',
      label: 'Docusaurus',
      collapsed: true,
      items: [{
        type: 'link',
        label: 'Website',
        href: 'https://v2.docusaurus.io/',
      },
          {
        type: 'category',
        label: 'Basic',
        items: ['tutorial/doc1', 'tutorial/doc2', 'tutorial/doc3'],
      },
        {
        type: 'category',
        label: 'Features',
        items: [{
          type: 'doc',
          id: 'tutorial/mdx',
        }, 'tutorial/greeting'],
      }],
    },
  ],
};
