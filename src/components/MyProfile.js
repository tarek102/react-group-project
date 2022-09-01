/* eslint-disable camelcase */

import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import RocketList from './RocketList';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="col-12 col-md-6">
      <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {
              reservedRockets.map((e) => <RocketList key={e.id} rocket_name={e.rocket_name} />)
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyProfile;
