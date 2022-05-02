import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Author from "./pages/AuthorPage";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author/:id" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(Router);
