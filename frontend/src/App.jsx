import Navbar from "@components/Navbar";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/App.scss";
import Team from "@pages/Team";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
