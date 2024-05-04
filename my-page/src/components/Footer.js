// Footer.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="GitHub" icon={<GitHub />} />
      <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} />
      <BottomNavigationAction label="Twitter" icon={<Twitter />} />
    </BottomNavigation>
  );
}

export default Footer;
