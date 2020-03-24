import React from 'react';

function Form({ children, divClass }) {
  return (
    <form>
      <div className={`input-group ${divClass}`}>
        {children}
      </div>
    </form>
  );
}

export default Form;
