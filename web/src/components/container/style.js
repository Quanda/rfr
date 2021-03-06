import styled, { css } from 'styled-components';

export const StyledRoot = styled.div`
  box-sizing: border-box;
  max-width: ${(props) => props.fullWidth ? 'none' : '1250px'};
  margin: auto;
  padding: ${(props) => props.noPadding ? '0' : '10em 1.5em'};

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}
`;
