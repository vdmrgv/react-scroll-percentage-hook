import { Link, Typography } from '@mui/material';
import { gitHubLink } from '../links';

const Home = () => (
  <div style={{ width: '80vw' }}>
    <Typography variant="h6" align="center">
      Site with examples of components based on "react-scroll-percentage-hook"
    </Typography>
    <Typography align="center">
      If you like this project I will be glad if you put a star on the{' '}
      <Link target="_blank" href={gitHubLink} rel="noreferrer noopener">
        github page
      </Link>
      .
    </Typography>
  </div>
);

export default Home;
