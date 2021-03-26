import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import api from '@/services/api';
import { IChartProps } from '../types';

const ChartComponent: React.FC<IChartProps> = ({ period, ...domProps }) => {
  const matches = useMediaQuery('(max-width:1600px)');
  const data = useMemo(() => api.getDateByPeriod(period, matches, { min: 2, max: 12 }), [
    period,
    matches,
  ]);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 40,
          left: 0,
          bottom: 25,
        }}
      >
        <XAxis fontFamily="Cuprum" dataKey="key" interval={0} tickMargin={10} />
        <YAxis
          fontFamily="Cuprum"
          domain={[2, 12]}
          allowDataOverflow
          tickMargin={10}
          textAnchor="end"
          tickCount={7}
          interval={0}
          tickFormatter={(value) => `${value}h`}
        />
        <Tooltip />
        <Bar dataKey="pv" fill="#CFC6EB" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default ChartComponent;
