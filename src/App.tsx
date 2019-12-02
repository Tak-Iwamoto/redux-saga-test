import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Video from './containers/Video';

const App: FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/videos/:videoId" component={Video} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
