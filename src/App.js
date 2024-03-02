// import logo from './logo.svg';
import "./App.css";
import Card from "./components/card/Card";
import Headermain from "./components/headermain/Headermain";
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      <Headermain />
      <List/>
      <Card/>
    </div>
  );
}

export default App;
