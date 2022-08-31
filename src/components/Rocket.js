/* eslint-disable camelcase, no-unused-vars, react/prop-types, react/jsx-no-undef, no-undef */

import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { PropTypes } from 'prop-types';
import { rocketBook, rocketCancel } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const {
    id,
    rocket_name,
    description,
    flickr_images,
    reserved,
  } = props;

  return (
    <div id={id} key={id} className="d-flex flex-wrap flex-lg-nowrap m-2 p-2">
      <img src={flickr_images} width="250" height="180" className="image mx-2" alt="rocket-one" />
      <div className="wrapper">
        <h2 className="rocketName">{rocket_name}</h2>
        <div className="description">
          {reserved && <h4>Reserved</h4>}
          {description}
        </div>
        {reserved ? (
          <button
            id={id}
            className="cancelBtn btn btn-outline-danger"
            type="button"
            onClick={() => dispatch(rocketCancel(id))}
          >
            Cancel Reserve
          </button>
        ) : (
          <button
            id={id}
            className="reserveBtn btn btn-outline-info"
            type="button"
            onClick={() => dispatch(rocketBook(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
};
export default Rocket;
