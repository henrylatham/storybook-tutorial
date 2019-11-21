import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default function Button({ button: { id, text, state }, loading, onClick }) {

  const LoadingRow = (
    <div className="loading-button">
      <span className="glow-button">
        <span>Loading</span>
      </span>
    </div>
  );

  if (loading) {
    return (
    <div className="button">
      {LoadingRow}
    </div>
    );
  }

  return (
    <div className={`button ${state}`}>
      <button onClick={() => onClick(id)}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  button: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  loading: false,
};
