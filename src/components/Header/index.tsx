import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

import './styles.css';

import { selectIsUserLoggedIn } from '../../redux/user/selectors';
import { cleanUpUserData } from '../../redux/user/actions';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsUserLoggedIn);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="header-nav">
      <div className="left-container">
        <Link className="link" to="/">Time Out</Link>
      </div>
      <section className="left-container">
        <div className="link-container">
          <Link className="link" to="/contact">Contact</Link>
        </div>
        <div className="link-container">
          <Link className="link" to="/about-us">About Us</Link>
        </div>
        {isLoggedIn
          ? (
            <div className="link-container">
              <Tooltip title="My profile">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar sx={{ width: 36, height: 36 }}>U</Avatar>
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <>
              <div className="link-container" style={{ marginLeft: 30 }}>
                <Link className="link" to="/signup">Sign Up</Link>
              </div>
              <div className="link-container">
                <Link className="link" to="/login">Log In</Link>
              </div>
            </>
          ) }
      </section>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar />
          <Link to="/cart">My cart</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <button type="submit" onClick={() => dispatch(cleanUpUserData())}>
            Logout
          </button>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Header;
