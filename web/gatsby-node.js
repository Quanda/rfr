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
    const path = `/team/${slug.current}`;

    reporter.info(`Creating team member page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/team-member.js'),
      context: { id }
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
    const path = `/blog/${dateSegment}/${slug.current}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id }
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createTeamMemberPages(graphql, actions, reporter);
  await createBlogPostPages(graphql, actions, reporter);
};
