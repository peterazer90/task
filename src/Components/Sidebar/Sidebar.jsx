import React from 'react';
import CardProfile from '../Cards/Card-Profile';
import Filter from './Filter';

function Sidebar() {
  return (
    <aside className="profile-info col-lg-4 bg-light py-3 order-0">
      <CardProfile />
      <Filter />
    </aside>
  );
}

export default Sidebar;
