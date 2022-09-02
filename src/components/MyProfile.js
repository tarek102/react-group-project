/* eslint-disable camelcase */

import React from 'react';
import { useSelector } from 'react-redux';
// import { Table } from 'react-bootstrap';
import RocketList from './RocketList';
import MissionList from './MissionList';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="col-12 profile-sec">
      <div>
        <h3>
          My Rockets
        </h3>
        <ul>
          {
              reservedRockets.map((e) => <RocketList key={e.id} rocket_name={e.rocket_name} />)
          }
        </ul>
      </div>
      <div>
        <h3>
          My Missions
        </h3>
        <ul>
          {
              reservedMissions.map((e) => <MissionList key={e.id} mission_name={e.mission_name} />)
          }
        </ul>
      </div>
      {/* <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              <th>My Rockets</th>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {
              reservedRockets.map((e) => <RocketList key={e.id} rocket_name={e.rocket_name} />)
            }
              </td>
              <td>
                {
              reservedMissions.map((e) => <MissionList key={e.id} mission_name={e.mission_name} />)
            }
              </td>
            </tr>

          </tbody>
        </Table>
      </div> */}
    </div>
  );
};

export default MyProfile;
