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

  h3 {
    font-size: 3rem;
    margin: 0;
  }

  img {
    max-width: 250px;
  }
`;

const BridalParty = ({ name, extraCss, children, image }) => (
  <BridalStyles className={extraCss}>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{children}</p>
  </BridalStyles>
);

BridalParty.propTypes = {
  name: PropTypes.string.isRequired,
  extraCss: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default BridalParty;
