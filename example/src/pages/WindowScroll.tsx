import { Typography } from '@mui/material';
import { useState } from 'react';
import useScrollPercentage from 'react-scroll-percentage-hook';
import ExampleCard from '../components/ExampleCard';
import Item from '../components/Item';
import { getSourceUrl } from '../utils';

const WindowScroll = () => {
  const [data] = useState(new Array(100));

  const { percentage } = useScrollPercentage<HTMLDivElement>({ windowScroll: true });

  return (
    <ExampleCard title="Window Scroll" source={getSourceUrl('WindowScroll')}>
      <Typography>{percentage.vertical}</Typography>
      <div
        className="List"
        style={{
          width: '60vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {data.map((item, index) => (
          <Item key={item} index={index} className="Row" content={item} />
        ))}
      </div>
    </ExampleCard>
  );
};

export default WindowScroll;
