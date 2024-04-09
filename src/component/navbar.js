import React from 'react';
import { BsBell } from 'react-icons/bs';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'purple' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ color: 'white', fontWeight: 800 }}>
          <h1>Nusrse Gate</h1>
        </div>
      </div>
      <div>
        <a href="#" style={{ color: 'yellow', fontWeight: 500 }}> 
          <BsBell size="20" style={{ marginRight: '10px' }} /> Notifications
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
