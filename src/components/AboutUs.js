import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.section`
  background-color: ${props => props.theme.mauve};
  display: flex;
  flex-direction: column;
  justify-content: center;

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

const AboutUs = props => (
  <AboutStyles id="about-us">
    <OurStyles>
      <h3>Sarah Barker</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio
        ut sem nulla pharetra diam sit. Vitae suscipit tellus mauris a diam.
        Vitae congue eu consequat ac felis. Diam vel quam elementum pulvinar
        etiam non quam lacus suspendisse. Id diam vel quam elementum pulvinar.
        Elit eget gravida cum sociis natoque penatibus et magnis. Vitae
        elementum curabitur vitae nunc sed velit dignissim sodales. Id cursus
        metus aliquam eleifend mi in. Ut sem nulla pharetra diam sit amet nisl
        suscipit adipiscing. Arcu felis bibendum ut tristique et egestas. Nisl
        purus in mollis nunc sed id. Libero id faucibus nisl tincidunt eget
        nullam. Euismod elementum nisi quis eleifend quam. Eu volutpat odio
        facilisis mauris sit amet.
      </p>
    </OurStyles>
    <OurStyles>
      <h3>Eric Blohm</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio
        ut sem nulla pharetra diam sit. Vitae suscipit tellus mauris a diam.
        Vitae congue eu consequat ac felis. Diam vel quam elementum pulvinar
        etiam non quam lacus suspendisse. Id diam vel quam elementum pulvinar.
        Elit eget gravida cum sociis natoque penatibus et magnis. Vitae
        elementum curabitur vitae nunc sed velit dignissim sodales. Id cursus
        metus aliquam eleifend mi in. Ut sem nulla pharetra diam sit amet nisl
        suscipit adipiscing. Arcu felis bibendum ut tristique et egestas. Nisl
        purus in mollis nunc sed id. Libero id faucibus nisl tincidunt eget
        nullam. Euismod elementum nisi quis eleifend quam. Eu volutpat odio
        facilisis mauris sit amet.
      </p>
    </OurStyles>
  </AboutStyles>
);

export default AboutUs;
