import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/mission/mission';

const AllMission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr key={id} className="bg-light">
        <th scope="row" className="text-dark bg-light">
          {name}
        </th>
        <td className="w-50 text-dark bg-light">{description}</td>
        <td><span className=" bg-light text-dark">Not a Member</span></td>
        <td>
          {reserved ? (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => dispatch(leaveMission(id))}
            >
              Leave mission
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => dispatch(joinMission(id))}
            >
              Join Mission
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

AllMission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default AllMission;
