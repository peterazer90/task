import React from 'react';

function Button({ children, btnClass, onClick }) {
  return (
    <div className="input-group-append">
      <button
        className={`${btnClass} text-info btn bg-white shadow-none`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
