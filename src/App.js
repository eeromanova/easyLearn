// import logo from './logo.svg';
import "./App.css";
import Cards from "./components/cards/Cards";
import Headermain from "./components/headermain/Headermain";
import List from "./components/list/List";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Errorpage from "./components/errorpage/Errorpage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Headermain />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/training" element={<Cards />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
