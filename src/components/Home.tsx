import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const ids: string[] = ['adKN6i_etg0', '2yPtcvVZs58', 'gP6sOIzFyYc'];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const Home: FC = () => {
  const classes = useStyles();
  return (
    <>
      <ul className={classes.root}>
        {ids.map(id => (
          <Link key={id} to={`/videos/${id}`}>
            <li key={id}>{id}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
