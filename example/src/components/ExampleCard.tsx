import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

interface ExampleCardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  source?: string;
}

const ExampleCard = ({ children, title, description, source }: ExampleCardProps) => (
  <>
    {title && (
      <Typography variant="h6" fontWeight="bold">
        {title}{' '}
        {source && (
          <Link variant="body2" target="_blank" href={source} rel="noreferrer noopener">
            Source
          </Link>
        )}
      </Typography>
    )}
    {description && <Typography variant="body2">{description}</Typography>}
    {children}
  </>
);

export default ExampleCard;
