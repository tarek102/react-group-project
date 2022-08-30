import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Header>
    <div>
      <h2>Space travelers and Hub</h2>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/"><span className="rockets">Rockets</span></NavLink>
          <NavLink to="missions"><span className="missions">Missions</span></NavLink>
          <NavLink to="myprofile"><span className="my-profile">My Profile</span></NavLink>
        </li>
      </ul>
    </nav>
  </Header>
);

export default Header;
