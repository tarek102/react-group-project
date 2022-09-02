import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import NavBar from '../components/NavBar';

it('The Navbar works properly', () => {
  const nav = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(nav).toMatchSnapshot();
});
