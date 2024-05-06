// Footer.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import './styles//footer.css'; // Importar el archivo CSS

function Footer() {
  return (
    <div className="Footer"> {/* Aplicar la clase Footer */}
    <div className="SocialIcons"> {/* Aplicar la clase SocialIcons */}
      <BottomNavigationAction
        label="GitHub"
        icon={<GitHub style={{ color: '#fff' }} />}
        className="SocialIcon"
      />
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedIn style={{ color: '#fff' }} />}
        className="SocialIcon"
      />
      <BottomNavigationAction
        label="Twitter"
        icon={<Twitter style={{ color: '#fff' }} />}
        className="SocialIcon"
      />
    </div>
  </div>
);
}

export default Footer;
