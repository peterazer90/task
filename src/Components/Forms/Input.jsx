import React from 'react';

function Input({
  onChange, onFocus, onBlur, val,
}) {
  return (
    <input
      type="text"
      className="search-input form-control border-0 bg-white shadow-none"
      placeholder="Write Keyword"
      onFocus={onFocus}
      onBlur={onBlur}
      value={val}
      onChange={onChange}
    />
  );
}

export default Input;
