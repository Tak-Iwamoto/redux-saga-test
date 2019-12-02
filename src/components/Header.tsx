import React, { FC } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  // InputBase,
  Badge,
} from '@material-ui/core';
import {
  Menu,
  // Search,
  AccountCircle,
  Mail,
  Notifications,
  More,
} from '@material-ui/icons';

const Header: FC = () => (
  <div color="black">
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <Menu />
        </IconButton>
        {/* <Typography variant="h6" noWrap align="inherit">
          Material-UI
        </Typography> */}
        {/* <div>
          <div>
            <Search />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div> */}
        <div>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div>
          <IconButton
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <More />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
