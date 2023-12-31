import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img 
            src="https://ijunkie.com/wp-content/uploads/2020/06/Gmail-Icon.png" 
            alt="" />
        </div>
        
        <div className="header__middle">
            <SearchIcon />
            <input placeholder='Search mail' type='text' />
            <ArrowDropDown className='header__inputCaret' />
        </div>

        <div className="header__right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar />
        </div>
    </div>
  )
}

export default Header