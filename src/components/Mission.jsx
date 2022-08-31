import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../redux/mission/mission';
import AllMission from './AllMission';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missions);

  useEffect(() => {
    if (missionsData.length < 1) {
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="table-responsive">
          <Table striped bordered>
            <thead>
              <tr>
                <th scope="col">Mission</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">.</th>
              </tr>
            </thead>
            <tbody>
              {
                missionsData.map((item) => (
                  <AllMission
                    id={item.mission_id}
                    name={item.mission_name}
                    description={item.description}
                    reserved={item.reserved}
                    key={item.mission_id}
                  />
                ))

              }
            </tbody>
          </Table>
        </div>

      </div>

    </>
  );
};

export default Missions;
