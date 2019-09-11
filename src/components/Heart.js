import React from 'react';
import styled from 'styled-components';

const HeartStyles = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  transform: rotate(-45deg);
  border: 15px solid ${props => props.theme.sage};
  border-radius: (350px/50);
  border-top-color: transparent;
  border-right-color: transparent;
  /* overflow: hidden; */

  &::before,
  &::after {
    content: '';
    width: 350px;
    height: 350px;
    border-radius: 50%;
    position: absolute;
    border: 15px solid ${props => props.theme.sage};
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
  &::before {
    top: calc(-350px / 2);
    left: -15px;
    transform: rotate(45deg);
  }
  &::after {
    top: -15px;
    left: calc(350px / 2 - 15px * 2);
    transform: rotate(135deg);
  }

  img {
    transform: rotate(45deg);
  }
`;

const Heart = ({ children }) => <HeartStyles>{children}</HeartStyles>;

export default Heart;
