import React from 'react';
import { graphql } from 'gatsby';

import { getTestimonialUrl, mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, BlockContent, Box, Stars, ContentPreview } from '../components';
import { format } from 'date-fns';

export const query = graphql`
  query TestimonialsQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)testimonials/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    testimonials: allSanityTestimonial(sort: { fields: [reviewedAt], order: DESC }) {
      edges {
        node {
          id
          text
          reviewer
          reviewedAt
          slug {
            current
          }
        }
      }
    }
  }
`;

const TestimonialsPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    return null;
  }

  const testimonialNodes =
    data &&
    data.testimonials &&
    mapEdgesToNodes(data.testimonials).map((item) => ({
      ...item,
      linkTo: getTestimonialUrl(item.reviewedAt, item.slug.current),
      title: `${item.reviewer}`,
      text: item.text.slice(0, 128) + '...(continued)',
      caption: format(item.reviewedAt, 'DD MMMM YYYY'),
    }));

  return (
    <>
      <SEO title='Testimonials' />
      <Container centered={page.isCentered}>
        <Stars amount={5} align={page.isCentered ? 'center' : 'initial'} />

        <Box mb='3rem'>
          <BlockContent blocks={page._rawBody || []} />
        </Box>

        <Box d='grid' gtc='repeat(auto-fit, minmax(300px, 1fr))' gg='4em'>
          {testimonialNodes.map((node) => (
            <Box ta='left' key={node.id}>
              <ContentPreview {...node} />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default TestimonialsPage;
