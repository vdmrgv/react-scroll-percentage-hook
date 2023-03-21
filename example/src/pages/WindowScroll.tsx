import { Typography } from '@mui/material';
import React, { useState } from 'react';
import useScrollPercentage from 'react-scroll-percentage-hook';
import ExampleCard from '../components/ExampleCard';
import Item from '../components/Item';
import { getSourceUrl } from '../utils';

const WindowScroll = () => {
  const [data] = useState(new Array(100).fill(0));

  const { percentage } = useScrollPercentage<HTMLDivElement>({ windowScroll: true });

  return (
    <ExampleCard title="Window Scroll" source={getSourceUrl('WindowScroll')}>
      <Typography
        style={{
          position: 'fixed',
          right: '10px',
        }}
      >
        Scrolling progress: {percentage.vertical}
      </Typography>
      <div
        className="List"
        style={{
          width: '60vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {data.map((_, index) => (
          <Item key={index} index={index} className="Row" content={`${index}`} />
        ))}
      </div>
    </ExampleCard>
  );
};

export default WindowScroll;
