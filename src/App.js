import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Missions from './components/Mission';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Rockets />} /> */}
        <Route path="/" element={<Missions />} />
        {/* <Route path="myprofile" element={<MyProfile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
