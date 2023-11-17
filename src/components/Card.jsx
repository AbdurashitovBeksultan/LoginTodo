import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, TextField } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#FF4081',
    },
  },
});

const ThemedComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TextField
        label="Имя пользователя"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary">
        Войти
      </Button>
    </ThemeProvider>
  );
};

export default ThemedComponent;
