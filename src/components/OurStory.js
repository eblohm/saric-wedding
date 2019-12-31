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
        Sarah and Eric crossed paths occasionally throughout their high school
        days but officially started talking at the end of junior year when they
        shared the same room to take the ACT. It also happened to be Eric’s
        birthday so Sarah wished Eric a “Happy Birthday” on Facebook and joked
        about how much fun it must have been to spend your birthday taking the
        ACT. Their relationship grew after they started texting each other
        non-stop. After months of being friends they decided to go to senior
        year homecoming. About a week later they decided to make their
        relationship official. Their first date was at MJR when they saw “The
        Last Exorcism”. The two went to their senior prom together that year and
        both decided to apply to Michigan State University where they spent the
        next four years together. Sophomore year is when they decided to take
        the next step in their relationship and live together. Two apartments,
        lots of beefaroni, Pita Pit delivery and a whole bunch of mountain dew
        later Sarah was ready for graduation. After graduation, Sarah decided to
        take a position with Disney and do the Disney College program while Eric
        finished up his last semester of college. After Sarah’s semester with
        Disney she decided she was ready to get back to Michigan, Sarah moved
        back to Michigan and took a job in Kalamazoo, and Eric had moved home to
        Warren. Eric would drive out to Kalamazoo most weekends until Sarah
        decided to move back to the east side of the state where they would
        finally be close again. After almost a decade together, Sarah dropped a
        very subtle hint to Eric by sending him a link to a 100.3 WNIC contest
        to win an engagement ring…
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
