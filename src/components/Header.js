import React from 'react';
import styled from 'styled-components';

const OurName = styled.div`
  color: ${props => props.theme.mauve};
  font-family: ${props => props.theme.script};
  font-size: 7rem;
  font-weight: 700;
  text-align: center;
  text-transform: lowercase;
`;

const OurLinks = styled.nav`
  display: flex;
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.8rem;
  font-weight: 700;
  justify-content: center;
  list-style: none;
  text-align: center;

  a {
    color: ${props => props.theme.maroon};
  }

  li:not(:last-child) {
    margin-right: 2em;
  }
`;

const Header = () => {
  return (
    <header>
      <OurName>The Saric Wedding</OurName>
      <OurLinks>
        <li>
          <a href="#our-story">our story</a>
        </li>
        <li>
          <a href="#bridal-party">the bridal party</a>
        </li>
        <li>
          <a href="ceremony">the ceremony</a>
        </li>
        <li>
          <a href="#registries">registry</a>
        </li>
      </OurLinks>
    </header>
  );
};

export default Header;
