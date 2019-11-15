import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import styled from 'styled-components';

const DateStyles = styled.section`
  background-color: ${props => props.theme.mauve};

  p {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.script};
  }
`;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <p>Thank you for celebrating with us!</p>;
  } else {
    return (
      <span>
        {days} day{days !== 1 ? 's' : ''}, {hours} hour{hours !== 1 ? 's' : ''},{' '}
        {minutes} minute{minutes !== 1 ? 's' : ''}, {seconds} second
        {seconds !== 1 ? 's' : ''}
      </span>
    );
  }
};

const formatter = buildFormatter(1, 'year', 'ago');

const Dates = ({ date, id }) => (
  <DateStyles id={id} className="date-counter">
    {id === 'forever' ? (
      <div>
        <p>forever starts in...</p>
        <Countdown date={date} renderer={renderer} />
      </div>
    ) : (
      <div>
        <p>it all began...</p>
        <TimeAgo date={date} formatter={formatter} />
      </div>
    )}
  </DateStyles>
);

Dates.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
};

export default Dates;
