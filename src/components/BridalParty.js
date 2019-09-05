import React from 'react';
import styled from 'styled-components';

const BridalStyles = styled.div`
  padding: 1rem;
  text-align: center;

  &.best-man,
  &.maid-of-honor {
    background-color: ${props => props.theme.mauve};
    border-radius: 5px;
  }
`;

const BridalParty = ({ name, part, extraCss, children }) => (
  <BridalStyles className={extraCss}>
    <img src="" alt={name} />
    <h3>
      {name} - {part}
    </h3>
    <p>{children}</p>
  </BridalStyles>
);

export default BridalParty;
