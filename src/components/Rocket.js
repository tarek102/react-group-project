/* eslint-disable camelcase, no-unused-vars, react/prop-types, react/jsx-no-undef, no-undef */

import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Badge from 'react-bootstrap/Badge';
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
    <div id={id} key={id} className="d-flex flex-wrap flex-lg-nowrap my-2 py-2">
      <img src={flickr_images} width="290" height="220" className="image mx-2" alt="rocket-one" />
      <div className="wrapper d-flex flex-column justify-content-start h-5">
        <h2 className="rocketName">{rocket_name}</h2>
        <div className="description my-3">
          {reserved && (
          <h5>
            <Badge bg="secondary">reserved</Badge>
          </h5>
          )}
          {description}
        </div>
        {reserved ? (
          <button
            id={id}
            className="cancelBtn btn btn-outline-danger w-25"
            type="button"
            onClick={() => dispatch(rocketCancel(id))}
          >
            Cancel Reserve
          </button>
        ) : (
          <button
            id={id}
            className="reserveBtn btn btn-outline-info w-25"
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
