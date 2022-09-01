const ROCKET_BOOK = 'space-travelers/rockets/ROCKET_BOOK';
const ROCKET_CANCEL = 'space-travelers/rockets/ROCKET_CANCEL';
const ROCKET_ADD = 'space-travelers/rockets/ROCKET_BOOK';

const Api = 'https://api.spacexdata.com/v3/rockets';

export const rocketBook = (e) => ({
  type: ROCKET_BOOK,
  payload: {
    e,
  },
});

export const rocketAdd = (e) => ({
  type: ROCKET_ADD,
  payload: {
    e,
  },
});

export const rocketCancel = (e) => ({
  type: ROCKET_CANCEL,
  payload: {
    e,
  },
});

export const fetchRocketApi = () => async () => {
  await fetch(Api)
    .then((response) => response.json())
    .then(() => {
    });
};
