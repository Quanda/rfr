import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

import { Figure, Slideshow } from './components';
import { Typography } from '..';
import { Link } from 'gatsby';
import { getUrlFromReference } from '../../lib/helpers';

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 css={Typography.responsiveTitle1}>{props.children}</h1>;

        case 'h2':
          return <h2 css={Typography.responsiveTitle2}>{props.children}</h2>;

        case 'h3':
          return <h3 css={Typography.responsiveTitle3}>{props.children}</h3>;

        case 'h4':
          return <h4 css={Typography.responsiveTitle4}>{props.children}</h4>;

        case 'h5':
          return <h5 css={Typography.responsiveTitle5}>{props.children}</h5>;

        case 'small':
          return <span css={Typography.small}>{props.children}</span>;

        case 'normal':
          return <div css={Typography.base}>{props.children}</div>;

        case 'large':
          return <div css={Typography.large}>{props.children}</div>;

        case 'blockquote':
          return <blockquote css={Typography.blockQuote}>{props.children}</blockquote>;

        default:
          return <p css={Typography.paragraph}>{props.children}</p>;
      }
    },
    figure (props) {
      return <Figure {...props.node} />;
    },
    slideshow (props) {
      return <Slideshow {...props.node} />;
    },
  },
  marks: {
    externalLink: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank
        ? <a href={href} target='_blank' rel='noopener'>{children}</a>
        : <a href={href}>{children}</a>;
    },
    internalLink: ({ mark, children }) => {
      let href = getUrlFromReference(mark.reference);
      return <Link to={href}>{children}</Link>;
    },
    color: (props) => {
      if (props.mark.fontColor) {
        return <span style={{ color: props.mark.fontColor }}>{props.children}</span>;
      }
      return props.children;
    },
    spacer: (props) => {
      return <div style={{ padding: `${props.mark.value}px 0` }}>{props.children}</div>;
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
