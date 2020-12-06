export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'isCentered',
      title: 'Centered?',
      type: 'boolean',
      description: 'Whether the contents of the page should be centered'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ],
  preview: {
    select: {
      title: 'body'
    }
  }
};
