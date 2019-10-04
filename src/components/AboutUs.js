import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.section`
  background-color: ${props => props.theme.mauve};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }

  h3 {
    font-size: 3.6rem;
    margin: 1rem 0;
  }

  p {
    font-family: ${props => props.theme.sansSerif};
    font-size: 1.6rem;
  }
`;

const OurStyles = styled.div`
  text-align: center;

  @media screen and (min-width: 1200px) {
    text-align: left;
    width: 75%;
  }

  &:first-child {
    margin: 1.5rem;

    @media screen and (min-width: 1200px) {
      margin-right: 2.5rem;
      text-align: right;
    }

    p {
      margin-left: auto;
      margin-right: 0;
    }
  }

  &:last-child {
    margin: 1.5rem;

    @media screen and (min-width: 1200px) {
      margin-left: 2.5rem;
    }

    p {
      margin-left: 0;
      margin-right: auto;
    }
  }

  p {
    @media screen and (min-width: 1200px) {
      width: 75%;
    }
  }
`;

const AboutUs = () => (
  <AboutStyles id="about-us">
    <OurStyles>
      <h3>sarah barker</h3>
      <p></p>
    </OurStyles>
    <OurStyles>
      <h3>eric blohm</h3>
      <p></p>
    </OurStyles>
  </AboutStyles>
);

export default AboutUs;
