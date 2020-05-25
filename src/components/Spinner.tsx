import React, { FC } from 'react';
import { Segment, Loader, Dimmer } from 'semantic-ui-react';

const Spinner: FC = () => {
  return (
    <>
      <Segment>
        <Dimmer>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      </Segment>
    </>
  );
};

export default Spinner;
