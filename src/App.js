// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
import MovieDetail from "./components/MovieDetail";
import AnimeList from "./components/AnimeList";
import TrendingAnime from "./components/TrendingAnime";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Register from "./components/Register";
import ActionPage from "./components/ActionPage";
import AnimeDetail from "./components/AnimeDetail";
import SearchResults from "./components/SearchResults"; // Import SearchResults
import { Box } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#111", minHeight: "100vh" }}>
        <Header />
        <Routes>
          {/* Route trang chủ */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <MovieGrid />
              </>
            }
          />
          {/* Route MovieDetail cho phim */}
          <Route path="/movie/:id" element={<MovieDetail />} />
          {/* Route Anime List */}
          <Route path="/anime" element={<AnimeList />} />
          {/* Route Anime Chi tiết */}
          <Route path="/anime/:id" element={<AnimeDetail />} />
          {/* Route thịnh hành Anime */}
          <Route path="/trending-anime" element={<TrendingAnime />} />
          {/* Route Đăng nhập */}
          <Route path="/login" element={<Login />} />
          {/* Route Đăng ký */}
          <Route path="/register" element={<Register />} />
          {/* Route Hoạt hình hành động */}
          <Route path="/action" element={<ActionPage />} />
          {/* Route tìm kiếm */}
          <Route path="/search-results/:query" element={<SearchResults />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
