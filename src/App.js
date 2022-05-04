import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages";

import Signinpages from "./pages/signin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signinpages />} />
      </Routes>
    </BrowserRouter>
  );
}
