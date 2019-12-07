import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ids: string[] = ['M9gW_b6hHqY', '2yPtcvVZs58', 'gP6sOIzFyYc'];

const Home: FC = () => (
  <>
    <ul>
      {ids.map(id => (
        <Link to={`/videos/${id}`}>
          <li key={id}>{id}</li>
        </Link>
      ))}
    </ul>
  </>
);

export default Home;
