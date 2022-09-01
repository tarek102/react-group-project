const ROCKET_BOOK = 'space-travelers/rockets/ROCKET_BOOK';
const ROCKET_CANCEL = 'space-travelers/rockets/ROCKET_CANCEL';
const ROCKET_ADD = 'space-travelers/rockets/ROCKET_ADD';

const Api = 'https://api.spacexdata.com/v3/rockets';

export const rocketAdd = (payload) => ({
  type: ROCKET_ADD,
  payload,
});

export const rocketBook = (payload) => ({
  type: ROCKET_BOOK,
  payload,
});

export const rocketCancel = (payload) => ({
  type: ROCKET_CANCEL,
  payload,
});

export const fetchRocketApi = () => async (dispatch) => {
  const res = await fetch(Api);
  const data = await res.json();

  const editRockets = data.map((rocket) => {
    const rocketObject = {
      rocket_id: rocket.rocket_id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
      reserved: false,
    };
    return rocketObject;
  });
  dispatch(rocketAdd(editRockets));
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKET_ADD:
      return [...action.payload];

    case ROCKET_BOOK:
      return state.map((rocket) => {
        if (rocket.rocket_id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });

    case ROCKET_CANCEL:
      return state.map((rocket) => {
        if (rocket.rocket_id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });

    default:
      return state;
  }
};

export default rocketReducer;
