import React from "react";
import './App.scss';
import Header from './components/Header.js';
import Footer from './components/Footer.js'; // Importa o Footer
import HomeBanner from "./components/HomeBanner.js"; 
import Banner from "./components/Banner.js";
import MovieDetails from "./components/MovieDetails.js";
import List from "./components/List.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {/* Redirecionar da raiz para /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Página de Dashboard */}
          <Route path="/dashboard" element={
            <React.Fragment>
              <Header />
              <Banner />
              <List title="Netflix Originals" param="originals" />
              <List title="Trending Now" param="trending" />
              <List title="Now Playing" param="now_playing" />
              <List title="Popular" param="popular" />
              <List title="Top Rated" param="top_rated" />
              <List title="Upcoming" param="upcoming" />
            </React.Fragment>
          } />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer /> {/* Adiciona o Footer aqui */}
    </React.Fragment>
  );
}

export default App;
