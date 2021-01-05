import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;
  padding: 0;
  margin: 0;

  ${MEDIA.TABLET`
    flex-direction: column;

    & li {
      &:not(:last-child) {
        margin-bottom: 4em;
      }
    }
  `};

  & li {
    flex: 0 0 33.3333%;

    & a {
      display: inline-block;
      
      img {
        opacity: 0.85;
      }
    }
  }
`;

export const StyledImageContainer = styled.div`
  padding-bottom: 2em;

  & img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;