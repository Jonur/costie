import React from 'react';
import Consumer from '../CostieProvider';
import Typography from '@material-ui/core/Typography';

const Titles = () => {
  const handleClick = () => window.location.href = '/';

  return (
    <Consumer>
      {({ context }) => (
        <React.Fragment>
          <Typography component="h1" variant="h3" align="center" className="white logo" onClick={handleClick}>
            {context.dictionary.header}
          </Typography>
          <Typography component="h2" variant="h5" align="center" className="white">
            {context.dictionary.subheader}
          </Typography>
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default Titles;
