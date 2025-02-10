import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('Classified Ads')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            {t('Home')}
          </Button>
          <Button color="inherit" component={Link} to="/post-ad">
            {t('Post Ad')}
          </Button>
          <Button color="inherit" component={Link} to="/login">
            {t('Login')}
          </Button>
          <Button color="inherit" component={Link} to="/register">
            {t('Register')}
          </Button>
          <Button color="inherit" onClick={() => changeLanguage('en')}>
            English
          </Button>
          <Button color="inherit" onClick={() => changeLanguage('fr')}>
            Français
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
