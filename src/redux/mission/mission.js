const GET_MISSIONS = 'spacex/reducer/GET_MISSIONS';
const JOIN_MISSION = 'spacex/reducer/JOIN_MISSION';
const LEAVE_MISSION = 'spacex/reducer/LEAVE_MISSION';

const initialMissionState = [];

export const getMission = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionReducer = (state = initialMissionState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.payload];

    case JOIN_MISSION:
      return state.map((item) => {
        if (item.mission_id !== action.payload) return item;
        return { ...item, reserved: true };
      });

    case LEAVE_MISSION:
      return state.map((item) => {
        if (item.mission_id !== action.payload) return item;
        return { ...item, reserved: false };
      });

    default:
      return state;
  }
};

export default missionReducer;

const baseURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = () => async (dispatch) => {
  const res = await fetch(baseURL);
  const data = await res.json();
  const editMissions = data.map((item) => {
    const missionObject = {
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
      reserved: false,
    };
    return missionObject;
  });
  dispatch(getMission(editMissions));
};