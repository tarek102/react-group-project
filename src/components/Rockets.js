import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';

import { fetchRocketApi } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketApi());
    }
  }, []);

  return (
    <div className="container mt-5 testing">
      {rockets.map((rocket) => (
        <Rocket
          id={rocket.rocket_id}
          key={rocket.rocket_id}
          flickr_images={rocket.flickr_images[0]}
          rocket_name={rocket.rocket_name}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
