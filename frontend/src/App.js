import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import BrowserCollections from "./screens/BrowserCollections";
import BuyForm from "./screens/BuyForm";
import About from "./screens/About"
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/browse">
            <BrowserCollections />
          </Route>
          <Route path="/buy">
            <BuyForm />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
