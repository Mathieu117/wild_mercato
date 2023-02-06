import Navbar from "@components/Navbar";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/App.scss";
import Team from "@pages/Team";
import { Routes, Route } from "react-router-dom";
import Article from "@pages/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
