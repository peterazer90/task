import React from 'react';

function MainSection({ children }) {
  return (
    <section className="main-container w-100 p-0">
      <div className="row h-100">
        {children}
      </div>
    </section>
  );
}

export default MainSection;
