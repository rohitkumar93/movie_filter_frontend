import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from './MovieList';

const App = () => {
  return (
     <Router>
      <Routes>
        {/* Define the "MovieList" component as the element for the "/movies" route */}
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;
