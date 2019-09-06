import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: ${props =>
    props.background === 'mauve' ? props.theme.sage : props.theme.maroon};
  padding: 6rem 0;
`;

const Details = styled.div`
  margin: 0 auto;
  width: 120rem;
`;

const Heading = styled.h2`
  color: ${props => props.theme.white};
  font-size: 5rem;
  margin-top: 0;
  text-align: center;
`;

const SectionText = styled.div`
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.8rem;

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
