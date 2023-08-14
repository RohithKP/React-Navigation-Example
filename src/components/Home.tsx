import * as React from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import NestedComponent from './NestedComponent';

function Home() {
  const navigate = useNavigate();

  const goToNestedScreen = () => {
    navigate('/nested', { relative: '.' });
  };

  return (
    <div>
      This is the Home page.
      <button onClick={goToNestedScreen}>Navigate to Nested Route</button>
      <Outlet />
    </div>
  );
}

export default Home;
