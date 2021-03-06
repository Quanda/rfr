import styled, { css } from 'styled-components';
import { Box } from '../box';

export const StyledHeading = styled.div`
  ${(props) => props.hasSubtitle && css`
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0.125em;
    }
  `}
`;

export const StyledImageContainer = styled(Box)`
  & img {
    max-width: 200px;
    max-height: 200px;
  }
`;
