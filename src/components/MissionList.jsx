/* eslint-disable camelcase */
import PropTypes from 'prop-types';

const MissionList = (props) => {
  const { mission_name } = props;

  return (
    <>
      <li className="text-dark profile-list">
        {mission_name}
      </li>
    </>
  );
};

MissionList.propTypes = {
  mission_name: PropTypes.string.isRequired,
};

export default MissionList;
