import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Timer from './Timer';

function Header() {
  return (
    <header className="row py-2 align-items-center bg-light sticky-top">
      <div className="col-lg-8 col-md mr-auto">
        <div className="row">
          <Logo />
          <Search />
        </div>
      </div>
      <Timer />
    </header>
  );
}

export default Header;
