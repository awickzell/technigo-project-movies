import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularList from "./components/PopularList";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
