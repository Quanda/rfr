const { format } = require('date-fns');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createTeamMemberPages (graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTeamMember(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const teamMemberEdges = (result.data.allSanityTeamMember || {}).edges || [];

  teamMemberEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/team/${slug.current}/`;

    reporter.info(`Creating team member page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/team-member.js'),
      context: { id },
    });
  });
}

async function createBlogPostPages (graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node;
    const dateSegment = format(publishedAt, 'YYYY/MM');
    const path = `/news/${dateSegment}/${slug.current}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id },
    });
  });
}

async function createEventPages (graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityEvent(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            eventAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const eventEdges = (result.data.allSanityEvent || {}).edges || [];

  eventEdges.forEach((edge, index) => {
    const { id, slug = {}, eventAt } = edge.node;
    const dateSegment = format(eventAt, 'YYYY/MM');
    const path = `/news/${dateSegment}/${slug.current}/`;

    reporter.info(`Creating event page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/event-post.js'),
      context: { id },
    });
  });
}

async function createPressReleasePages (graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPressRelease(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pressReleaseEdges = (result.data.allSanityPressRelease || {}).edges || [];

  pressReleaseEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node;
    const dateSegment = format(publishedAt, 'YYYY/MM');
    const path = `/news/${dateSegment}/${slug.current}/`;

    reporter.info(`Creating press release page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/press-release.js'),
      context: { id },
    });
  });
}

async function createTestimonialPages (graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTestimonial(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            reviewedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const testimonialEdges = (result.data.allSanityTestimonial || {}).edges || [];

  testimonialEdges.forEach((edge, index) => {
    const { id, slug = {}, reviewedAt } = edge.node;
    const dateSegment = format(reviewedAt, 'YYYY/MM');
    const path = `/testimonials/${dateSegment}/${slug.current}/`;

    reporter.info(`Creating testimonial page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/testimonial.js'),
      context: { id },
    });
  });
}

async function createProductPages (graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const productEdges = (result.data.allSanityProduct || {}).edges || [];

  productEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/merchandise/${slug.current}/`;

    reporter.info(`Creating product page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/merchandise.js'),
      context: { id },
    });
  });
}

async function createSuccessStoryPages (graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanitySuccessStory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const successStoryEdges = (result.data.allSanitySuccessStory || {}).edges || [];

  successStoryEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/success-stories/${slug.current}/`;

    reporter.info(`Creating success story page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/success-story.js'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createTeamMemberPages(graphql, actions, reporter);
  await createBlogPostPages(graphql, actions, reporter);
  await createEventPages(graphql, actions, reporter);
  await createPressReleasePages(graphql, actions, reporter);
  await createTestimonialPages(graphql, actions, reporter);
  await createProductPages(graphql, actions, reporter);
  await createSuccessStoryPages(graphql, actions, reporter);
};
