import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Detail from "./components/Detail.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
