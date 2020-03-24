import React from 'react';

function Select({ options, onChange }) {
  return (
    <select className="form-control border-info shadow-none" onChange={onChange}>
      {
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))
      }
    </select>

  );
}

export default Select;
