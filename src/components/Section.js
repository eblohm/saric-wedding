import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: ${props =>
    props.background === 'mauve' ? props.theme.sage : props.theme.maroon};
  padding: 6rem 0;
`;

const Details = styled.div`
  margin: 0 auto;
  width: 31rem;

  @media screen and (min-width: 480px) {
    width: 47rem;
  }

  @media screen and (min-width: 770px) {
    width: 76rem;
  }

  @media screen and (min-width: 1200px) {
    width: 119rem;
  }
`;

const Heading = styled.h2`
  color: ${props => props.theme.white};
  font-size: 5rem;
  margin-top: 0;
  text-align: center;
`;

const SectionText = styled.div`
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.6rem;

  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }

  p {
    color: ${props => props.theme.white};
  }
`;

const Section = ({ id, heading, children }) => (
  <Container id={id}>
    <Details>
      <Heading>{heading}</Heading>
      <SectionText>{children}</SectionText>
    </Details>
  </Container>
);

export default Section;
