import React, { HTMLAttributes, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import clsx from 'clsx';
import NavButtonsGroup from '@/components/NavButtonsGroup';
import { Periods } from '@/types/periods';
import ChartComponent from './chart';
import useStyles from './styles';

const RevenueCard: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  const [period, setPeriod] = useState(Periods.Week);
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <div className={classes.titleBlock}>
            <div className={classes.title}>Revenue</div>
            <div className={classes.revenueBlock}>
              <div className={classes.current}>
                <span className={classes.target}>2020</span>
                <span>$ 300 000</span>
              </div>
              <div className={classes.before}>
                <span className={classes.target}>2019</span>
                <span>$ 300 000</span>
              </div>
            </div>
          </div>
          <NavButtonsGroup state={period} setChanges={setPeriod} />
        </div>
        <ChartComponent period={period} />
      </CardContent>
    </Card>
  );
};

export default RevenueCard;
