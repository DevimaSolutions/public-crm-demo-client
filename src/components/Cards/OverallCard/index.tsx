import React, { HTMLAttributes, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import NavButtonsGroup from '@/components/NavButtonsGroup';
import { Periods } from '@/types/periods';
import ChartComponent from './chart';
import useStyles from './styles';

const OverallCard: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...domProps }) => {
  const [period, setPeriod] = useState(Periods.Week);
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <div className={classes.titleBlock}>
            <div className={classes.title}>Overall:</div>
            <div className={classes.revenueBlock}>300 000 hours</div>
          </div>
          <NavButtonsGroup state={period} setChanges={setPeriod} />
        </div>
        <ChartComponent period={period} />
      </CardContent>
    </Card>
  );
};

export default OverallCard;
