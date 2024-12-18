import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Create from "./pages/create";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
