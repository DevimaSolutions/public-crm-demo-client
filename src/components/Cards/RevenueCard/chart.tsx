import React, { useCallback, useMemo } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Periods } from '@/types/periods';
import api from '@/services/api';

interface IProps {
  period: Periods;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '300px',
    },
    axisStyle: {
      fontFamily: 'Cuprum',
      fontWeight: 400,
    },
  }),
);

const ChartComponent: React.FC<IProps> = ({ period }: IProps) => {
  const matches = useMediaQuery('(max-width:1600px)');
  const data = useMemo(() => api.getDateByPeriod(period, matches, { min: 300, max: 3000 }), [
    period,
    matches,
  ]);
  const formatTik = useCallback((value: number) => {
    if (value >= 1000) return `$ ${value / 1000}k`;
    return `$ ${value}`;
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 15,
            right: 40,
            left: 0,
            bottom: 25,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5435B8" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#5435B8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5435B8" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#5435B8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis fontFamily="Cuprum" dataKey="key" interval={0} tickMargin={10} />
          <YAxis fontFamily="Cuprum" domain={[0, 3000]} tickCount={7} tickFormatter={formatTik} />
          <CartesianGrid vertical={false} stroke="rgba(232, 233, 232, 0.8)" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#5435B8"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
