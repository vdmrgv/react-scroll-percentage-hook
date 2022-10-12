import { Typography } from '@mui/material';
import { useState } from 'react';
import useScrollPercentage from 'react-scroll-percentage-hook';
import ExampleCard from '../components/ExampleCard';
import Item from '../components/Item';
import { getSourceUrl } from '../utils';

const VerticalScroll = () => {
  const [data] = useState(new Array(100));

  const { ref, percentage } = useScrollPercentage<HTMLDivElement>();

  return (
    <ExampleCard title="Vertical Scroll" source={getSourceUrl('VerticalScroll')}>
      <Typography>{percentage.vertical}</Typography>
      <div
        ref={ref}
        className="List"
        style={{
          height: '50vh',
          width: '70vw',
          overflowX: 'auto',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {data.map((_, index) => (
          <Item key={index} index={index} className="Column" content={`${index}`} />
        ))}
      </div>
    </ExampleCard>
  );
};

export default VerticalScroll;
