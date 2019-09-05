import React from 'react';
import Countdown from 'react-countdown-now';
import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

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

const Dates = ({ backgroundImage, date, id }) => (
  <section id={id} className="date-counter">
    {id === 'forever' ? (
      <div>
        <p>Forever starts in...</p>
        <Countdown date={date} renderer={renderer} />
      </div>
    ) : (
      <div>
        <p>It all began...</p>
        <TimeAgo date={date} formatter={formatter} />
      </div>
    )}
  </section>
);

export default Dates;
