import React from 'react';
import Typography from '@material-ui/core/Typography';

const Titles = () => {
  const handleClick = () => window.location.href = '/';

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" align="center" className="white logo" onClick={handleClick}>
        Costie
        </Typography>
      <Typography component="h2" variant="h5" align="center" className="white">
        Time is money.
        </Typography>
    </React.Fragment >
  );
};

export default Titles;
