import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import GlobalFonts from "./fonts/fontstyle";

import Home from "./pages";

import Signinpages from "./pages/signin";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signinpages />} />
      </Routes>
    </BrowserRouter>
  );
}
