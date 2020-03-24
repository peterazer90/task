import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import MainSection from '../Templates/Main-Section';
import Timeline from '../Templates/Timeline';

function Profile() {
  return (
    <MainSection>
      <Timeline />
      <Sidebar />
    </MainSection>
  );
}

export default Profile;
