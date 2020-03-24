import React from 'react';

function ButtonLoadTweets({ onClick, btnText }) {
  return (
    <div className="w-100 text-center">
      <button
        onClick={onClick}
        type="button"
        className="btn btn-outline-info rounded-pill mb-3 font-weight-bold"
      >
          {btnText}
      </button>
    </div>
  );
}

export default ButtonLoadTweets;
