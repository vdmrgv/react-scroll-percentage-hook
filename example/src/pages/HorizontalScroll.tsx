import { Typography } from '@mui/material';
import { useState } from 'react';
import useScrollPercentage from 'react-scroll-percentage-hook';
import ExampleCard from '../components/ExampleCard';
import Item from '../components/Item';
import { getSourceUrl } from '../utils';

const HorizontalScroll = () => {
  const [data] = useState(new Array(100));

  const { ref, percentage } = useScrollPercentage<HTMLDivElement>();

  return (
    <ExampleCard title="Horizontal Scroll" source={getSourceUrl('HorizontalScroll')}>
      <Typography>{percentage.horizontal}</Typography>
      <div
        ref={ref}
        className="List"
        style={{
          height: '50vh',
          width: '70vw',
          overflowX: 'auto',
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

export default HorizontalScroll;
