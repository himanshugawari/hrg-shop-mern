import React from 'react';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 0.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 1.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 2.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 3.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <BsStarFill style={{ color }} />
        ) : value >= 4.5 ? (
          <BsStarHalf style={{ color }} />
        ) : (
          <BsStar style={{ color }} />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
