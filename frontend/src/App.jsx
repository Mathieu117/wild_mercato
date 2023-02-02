import Navbar from "@components/Navbar";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
