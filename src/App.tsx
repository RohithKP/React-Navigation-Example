import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import NestedComponent from './components/NestedComponent';
import './style.css';

// Lazyload about
const About = React.lazy(() => import('./components/About'));
export default function App() {
  return (
    <Router>
      <h1>React Navigation</h1>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />}>
          <Route path="/" exact element={<div>Welcome to the Home Page</div>} />
          <Route path="/nested" element={<NestedComponent />} />
        </Route>
        <Route
          path="/about"
          element={
            <React.Suspense fallback="loading...">
              <About />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
