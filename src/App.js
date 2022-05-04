import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <Router>
      <Sidebar />

      <Navbar />
    </Router>
  );
}
