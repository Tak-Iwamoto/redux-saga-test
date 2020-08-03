import React, {FC} from 'react';
import {Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Home: FC = () => {
  return (
    <Grid columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Link to="/videos/adKN6i_etg0">Video Test</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
