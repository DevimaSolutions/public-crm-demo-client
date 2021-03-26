import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import useStyles from './styles';

const EarningsCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.item}>
          <Typography className={classes.title} gutterBottom>
            Total earning
          </Typography>
          <div className={classes.body}>
            <AttachMoneyIcon className={classes.icon} color="primary" />
            <span>20.000</span>
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes.item}>
          <Typography className={classes.title} gutterBottom>
            Total hours
          </Typography>
          <div className={classes.body}>
            <QueryBuilderIcon className={classes.icon} color="primary" />
            <span>40:00</span>
          </div>
        </div>
        <div className={classes.footer}>
          <CalendarTodayIcon className={classes.footerIcon} />
          <span>01/Jun/2020-12/Jun/2020</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsCard;
