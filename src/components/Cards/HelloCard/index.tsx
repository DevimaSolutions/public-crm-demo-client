import React, { HTMLAttributes } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './styles';

const HelloCard: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.item}>
          <Typography className={classes.title} gutterBottom>
            Hello, Andriy
          </Typography>
          <Typography className={classes.subTitle} gutterBottom>
            Have a nice day at work
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelloCard;
