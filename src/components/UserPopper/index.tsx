import React, { HTMLAttributes, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import auth from '@DevimaSolutions/o-auth';
import AppPopper from '@/components/AppPopper';
import useStyles from './styles';

const UserPopper: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const onClickHandler = (path: string) => {
    setOpen(false);
    history.push(path);
  };

  const logOutHandler = () => {
    auth().signOut();
  };

  return (
    <AppPopper
      placement="bottom-end"
      className={className}
      open={open}
      onClose={() => setOpen(false)}
      content={
        <MenuList className={classes.list}>
          <MenuItem onClick={() => onClickHandler('/profile')} className={classes.listItem}>
            <ListItemIcon className={classes.listIcon}>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.listText} primary="Profile" />
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => logOutHandler()} className={classes.listItem}>
            <ListItemIcon className={classes.listIcon}>
              <PowerSettingsNewIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.listText} primary="Log Out" />
          </MenuItem>
        </MenuList>
      }
    >
      <IconButton onClick={() => setOpen(!open)} className={classes.btn}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </IconButton>
    </AppPopper>
  );
};

export default UserPopper;
