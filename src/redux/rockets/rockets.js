const ROCKET_BOOK = 'space-travelers/rockets/ROCKET_BOOK';
const ROCKET_CANCEL = 'space-travelers/rockets/ROCKET_CANCEL';
const ROCKET_ADD = 'space-travelers/rockets/ROCKET_BOOK';

const Api = "https://api.spacexdata.com/v3/rockets";

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
  payload: ROCKET_CANCEL,
  payload: {
    e,
  },
});

export const fetchRocketApi = () => async(dispatch) => {
  await fetch(Api)
  .then(response => response.json())
  .then(data => {
    const allRockets = data.map(e => {
      const fetchedData = {};
      fetchedData.id = e.id;
      fetchedData.rocket_name = e.rocket_name;
      fetchedData.description = e.description;
      fetchedData.flickr_images = e.flickr_images[0];
    })
  })
}