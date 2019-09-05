import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BridalStyles = styled.div`
  padding: 1rem;
  text-align: center;

  &.best-man,
  &.maid-of-honor {
    background-color: ${props => props.theme.mauve};
    border-radius: 5px;
  }
`;

const BridalParty = ({ name, extraCss, children }) => (
  <BridalStyles className={extraCss}>
    <img src="" alt={name} />
    <h3>{name}</h3>
    <p>{children}</p>
  </BridalStyles>
);

BridalParty.PropTypes = {
  name: PropTypes.string.isRequired,
  extraCss: PropTypes.string.isRequired,
};

export default BridalParty;
