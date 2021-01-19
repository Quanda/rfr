import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 42rem;
  margin: auto;
`;

export const StyledFigure = styled.figure`
  margin: 0;
`;

export const StyledBlockquote = styled.blockquote`
  margin: 0;
  width: fit-content;
  max-width: 550px;
  font-size: 1.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 2rem;
  background: var(--color-dark-white);
  border: 1px solid var(--color-very-light-gray);
  border-radius: 6px;
`;

export const StyledCitation = styled.figcaption`
  background: var(--color-very-light-gray);
  color: var(--color-black);
  border: 1px solid var(--color-very-light-gray);
  padding: 0.5em;
  border-radius: inherit;
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;

  & cite {
    margin-bottom: 0.5em;
  }

  & svg {
    margin-right: 0.5em;
  }
`;
