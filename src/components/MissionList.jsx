/* eslint-disable camelcase */
import PropTypes from 'prop-types';

const MissionList = (props) => {
  const { mission_name } = props;

  return (
    <>
      <tr>
        <th scope="row" className="text-dark bg-light">
          {mission_name}
        </th>
      </tr>
    </>
  );
};

MissionList.propTypes = {
  mission_name: PropTypes.string.isRequired,
};

export default MissionList;
