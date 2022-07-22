import { Router, Route, Switch } from "react-router";
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Homepage/>
      </div>
    </Router>

  );
}

export default App;
