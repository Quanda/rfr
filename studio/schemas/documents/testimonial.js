export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    {
      name: 'reviewer',
      title: 'Reviewer',
      type: 'string'
    },
    {
      name: 'reviewedAt',
      title: 'Reviewed at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      required: true,
      description: 'The trailing part of the URL. For example, in www.google.com/links - \'links\' is the URL slug. In most cases you should use the Generate button to auto-fill this field.',
      options: {
        source: 'text',
        maxLength: 48
      },
      validation: Rule => Rule.required()
    }
  ],
  orderings: [
    {
      title: 'Testimonial date new–>old',
      name: 'reviewDateAsc',
      by: [{ field: 'reviewedAt', direction: 'asc' }, { field: 'text', direction: 'asc' }]
    },
    {
      title: 'Testimonial date old->new',
      name: 'reviewDateDesc',
      by: [{ field: 'reviewedAt', direction: 'desc' }, { field: 'text', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'text',
      reviewer: 'reviewer',
      reviewedAt: 'reviewedAt'
    },
    prepare ({ title = 'No title', reviewer, reviewedAt }) {
      return {
        title: `${reviewer} - ${title.slice(0, 24)}`,
        subtitle: reviewedAt
          ? new Date(reviewedAt).toLocaleDateString()
          : 'Missing testimonial date'
      };
    }
  }
};
