import React from 'react';
import styled from 'styled-components';

const OurStoryContainer = styled.section`
  display: grid;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 35% 1fr;
  }
`;

const OurStoryImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

const OurStoryText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;

  @media screen and (min-width: 1200px) {
    padding: 2rem 5rem;
  }

  h2 {
    font-size: 5rem;
    margin: 0;
    text-align: center;

    @media screen and (min-width: 1200px) {
      text-align: left;
    }
  }

  p {
    font-family: ${props => props.theme.sansSerif};
    font-size: 1.6rem;

    @media screen and (min-width: 1200px) {
      font-size: 2rem;
    }
  }

  iframe {
    align-self: center;
    max-width: 100%;
  }
`;

const OurStory = () => (
  <OurStoryContainer id="our-story">
    <OurStoryImage>
      <img src="us.jpg" alt="Sarah and Eric" />
    </OurStoryImage>
    <OurStoryText>
      <h2>Our Story</h2>
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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6DnxufingB4"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="The Proposal Video"
      ></iframe>
    </OurStoryText>
  </OurStoryContainer>
);

export default OurStory;
