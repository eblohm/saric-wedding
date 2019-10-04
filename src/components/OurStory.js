import React from 'react';
import styled from 'styled-components';

const OurStoryContainer = styled.section`
  display: grid;

  @media screen and (min-width: 770px) {
    grid-template-columns: 45% 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 35% 1fr;
  }
`;

const OurStoryImage = styled.div`
  align-items: center;
  display: flex;
  grid-row-start: 2;
  justify-content: center;

  @media screen and (min-width: 770px) {
    grid-row-start: 1;
  }

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
      font-size: 1.8rem;
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
      <h2>our story</h2>
      <p>
        Sarah and Eric started talking at the end of their junior year of high
        school, when they both took the ACT in the same room together on Eric's
        birthday. Sarah wished him a happy birthday on Facebook after and
        brought up the two of them being in the same room, and the relationship
        grew from there. They went to homecoming and prom together, and both
        went off to college at Michigan State. After graduating, Sarah took a
        position with the Disney College Program and moved down to Florida while
        Eric finished up school. After her semester with the DCP was finished,
        Sarah moved back to Michigan and took a job in Kalamazoo, and Eric had
        moved home to Warren. Eric would drive out to Kalamazoo most weekends
        until Sarah moved home and they were finally together again. After years
        of waiting (9!), Sarah dropped a very subtle hint to Eric by sending him
        a link to a WNIC contest to win an engagement ring...
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
