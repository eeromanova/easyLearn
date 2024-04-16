import "./App.css";
import Cards from "./components/cards/Cards";
import HeaderMain from "./components/headermain/HeaderMain";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorpage/ErrorPage";
import Footer from "./components/footer/Footer";
import { WordsProvider } from "./components/WordsContextProvider";
import WordList from "./components/list/WordList";


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMain />
        <WordsProvider>
          <Routes>
            <Route path="/" element={<WordList />} />
            <Route path="/training" element={<Cards />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          </WordsProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
