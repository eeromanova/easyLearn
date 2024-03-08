// import logo from './logo.svg';
import "./App.css";
import Cards from "./components/cards/Cards";
import Headermain from "./components/headermain/Headermain";
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      <Headermain />
      <List/>
      <Cards/>
    </div>
  );
}

export default App;
