import React, { useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import clsx from 'clsx';
import Logo from '@/components/Svg/Logo';
import defaultRoutes from '@/router/routes';
import { saveSidebar } from '@/redux/settings/actions';
import { capitalize } from '@/constants/functions';
import { sidebarSelector } from '@/redux/settings/selectors';
import { userRoleSelector } from '@/redux/authorization/selectors';
import useStyles from './styles';

const sidebarRoutes = defaultRoutes.filter((route) => route.isSidebar);

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sidebar = useSelector(sidebarSelector);
  const dispatch = useDispatch();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const history = useHistory();

  const onCloseHandler = () => {
    dispatch(saveSidebar(false));
  };

  const onClickHandler = (path: string) => {
    history.push(path);
  };

  const userRole = useSelector(userRoleSelector);
  const routes = useMemo(() => {
    if (!userRole) {
      return [];
    }

    return sidebarRoutes.filter((r) => r.permissions.some((p) => p === userRole));
  }, [userRole]);

  return (
    <div>
      <Drawer
        variant={matches ? 'temporary' : 'permanent'}
        anchor="left"
        open={sidebar}
        onClose={onCloseHandler}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: sidebar,
          [classes.drawerClose]: !sidebar,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: sidebar,
            [classes.drawerClose]: !sidebar,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Logo className={clsx(classes.logo, { [classes.logoOpen]: sidebar })} />
        </div>
        <List>
          {routes.map(({ name, path, icon: Icon }) => (
            <ListItem
              button
              key={name}
              onClick={() => onClickHandler(path)}
              selected={location.pathname === path}
              className={classes.listItem}
            >
              {Icon && (
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
              )}
              <ListItemText primary={capitalize(name)} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
