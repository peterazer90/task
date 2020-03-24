import React from 'react';

function Loader({ data, children }) {
  return (
    (!data)
      ? (
        <div className="w-100 py-5 text-center">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
      : children
  );
}

export default Loader;
