import React from 'react';
import styled from 'styled-components';

const OurName = styled.div`
  color: ${props => props.theme.mauve};
  font-family: ${props => props.theme.script};
  font-size: 5.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: lowercase;

  @media screen and (min-width: 1200px) {
    font-size: 7rem;
  }
`;

const OurLinks = styled.nav`
  display: none;
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.8rem;
  font-weight: 700;
  justify-content: center;
  list-style: none;
  text-align: center;

  @media screen and (min-width: 1200px) {
    display: flex;
  }

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
          <a href="#event-details">the ceremony</a>
        </li>
        <li>
          <a href="#registry">registry</a>
        </li>
      </OurLinks>
    </header>
  );
};

export default Header;
