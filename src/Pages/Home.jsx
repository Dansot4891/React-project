import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quizbutton from '../Quiz/Quizbutton';
import Landmarks from '../Landmark/Landmarks';
import './Home.css';
import MovieList from '../Culture/MovieList';
import SongList from '../Culture/SongList';
import Holiday from '../Holiday/Holiday';
import PlayList from '../Play/PlayList';

function Home() {
  return (
    <Router>
      
      <div className="page-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Play">전통 민속 놀이</Link>
            </li>
            <li>
              <Link to="/Landmarks">한국의 랜드마크</Link>
            </li>
            <li>
              <Link to="/Quiz">Quiz 풀어보기</Link>
            </li>
            <li>
              <Link to="/Movie">영화 추천 목록</Link>
            </li>
            <li>
              <Link to="/Song">노래 추천 목록</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Holiday />} />
          <Route path="/Landmarks" element={<Landmarks />} />
          <Route path="/Quiz" element={<Quizbutton />} />
          <Route path="/Movie" element={<MovieList />} />
          <Route path="/Song" element={<SongList />} />
          <Route path="/Play" element={<PlayList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;