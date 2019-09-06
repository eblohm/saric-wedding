import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
  height: auto;
  max-width: 250px;
`;

const RegistryLink = ({ link, logo, companyName }) => (
  <a href={link} class="registry-link">
    <Image src={logo} alt={companyName} />
  </a>
);

RegistryLink.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

export default RegistryLink;
