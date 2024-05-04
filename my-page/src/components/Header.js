// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './styles/Header.css'; // Importar el archivo CSS

function Header() {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <Typography variant="h6" component="div" className="title">
          Design of software projects and Web Aplication CB
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
