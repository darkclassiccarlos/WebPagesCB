// Content.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function Content() {
  return (
    <Container>
      <Typography variant="h3" component="div" gutterBottom>
        Bienvenido a Mi Página
      </Typography>
      <Typography variant="body1" component="div">
        ¡Hola! Soy Carlos Bautista y esta es mi página de presentación.
      </Typography>
    </Container>
  );
}

export default Content;
