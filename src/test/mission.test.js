/* eslint-disable import/no-unresolved */

import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Mission from '../components/Mission';

it('missions display correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
