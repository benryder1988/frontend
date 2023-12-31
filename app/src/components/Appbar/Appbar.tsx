import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '../../components/shared/material'
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuth0 } from '@auth0/auth0-react';
import labels from '../../constants/labels';
import LoginButton from '../LoginButton/LoginButton';


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { user, logout, isAuthenticated } = useAuth0();

  const settings = [
    {name: 'Account', function: () => {}},
    {name: 'Logout', function: logout}
  ]

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar className='w-full' disableGutters>
          <Box display="flex" className="w-full">

            <Box display="flex" gap={5} className="flex-grow justify-center pt-2">
            </Box>
          
            { isAuthenticated && user ?
              <Box className="flex-none pt-2">
                <Typography textColor='colorGrey' textWeight='bold' onClick={handleOpenUserMenu}>
                  {user.name}
                </Typography>
                
                <Menu className='mt-8'
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={() => {setting.function()}}>
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>  :
              <LoginButton />
              }

          </Box >

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;