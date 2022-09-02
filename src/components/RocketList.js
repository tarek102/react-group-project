/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const RocketList = (props) => {
  const { rocket_name } = props;

  return (
    <>

      <li className="text-dark profile-list">
        {rocket_name}
      </li>

    </>
  );
};

RocketList.propTypes = {
  rocket_name: PropTypes.string.isRequired,
};

export default RocketList;
