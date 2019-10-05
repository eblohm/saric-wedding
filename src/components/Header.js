import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const OurName = styled.div`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.script};
  font-size: 5.5rem;
  font-weight: 400;
  text-align: center;
  text-transform: lowercase;

  @media screen and (min-width: 1200px) {
    font-size: 7rem;
    padding-top: 1.5rem;
    text-shadow: 0 0 16px ${props => props.theme.black};
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
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    display: flex;
  }

  a {
    color: ${props => props.theme.white};
    cursor: pointer;
    text-shadow: 0 0 16px ${props => props.theme.black}
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
          <Link smooth={true} to="our-story">
            our story
          </Link>
        </li>
        <li>
          <Link smooth={true} to="bridal-party">
            the bridal party
          </Link>
        </li>
        <li>
          <Link smooth={true} to="event-details">
            the ceremony
          </Link>
        </li>
        <li>
          <Link smooth={true} to="registry">
            registry
          </Link>
        </li>
      </OurLinks>
    </header>
  );
};

export default Header;
