import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import clsx from 'clsx';
import UserPopper from '@/components/UserPopper';
import { saveSidebar, saveTheme } from '@/redux/settings/actions';
import { settingsSelector } from '@/redux/settings/selectors';
import useStyles from './styles';

const Navbar: React.FC = () => {
  const classes = useStyles();
  const { sidebar, theme } = useSelector(settingsSelector);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(saveSidebar(!sidebar));
  };

  const toggleTheme = () => {
    dispatch(saveTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppBar
      color="default"
      position="fixed"
      className={clsx(classes.appBar, { [classes.appBarShift]: sidebar })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open main navigation"
          edge="start"
          className={clsx(classes.menuButton)}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.nav}>
          <IconButton aria-label="show notifications" color="inherit">
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tooltip title="Toggle light/dark theme">
            <IconButton aria-label="Toggle light/dark theme" color="inherit" onClick={toggleTheme}>
              {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
          <UserPopper className={classes.userPopper} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
