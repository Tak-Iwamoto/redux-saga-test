import React, { FC } from 'react';
import { Button, Grid } from 'semantic-ui-react';

const ids: string[] = ['adKN6i_etg0', '2yPtcvVZs58', 'gP6sOIzFyYc'];

const Home: FC = () => {
  return (
    <Grid columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Button content="Primary" primary />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button content="Primary" primary />
        </Grid.Column>
        <Grid.Column>
          <Button content="Primary" primary />
        </Grid.Column>
        <Grid.Column>
          <Button content="Primary" primary />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
