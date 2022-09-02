/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const RocketList = (props) => {
  const { rocket_name } = props;

  return (
    <>
      <tr>
        <th scope="row" className="text-dark bg-light">
          {rocket_name}
        </th>
      </tr>
    </>
  );
};

RocketList.propTypes = {
  rocket_name: PropTypes.string.isRequired,
};

export default RocketList;
