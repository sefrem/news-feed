import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Author from "./pages/AuthorPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/author/:id" element={<Author />} />
    </Routes>
  );
};

export default React.memo(Router);
