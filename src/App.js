import logo from './logo.png';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import About from './about';
import Main from './main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div class="mainNav">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
          `     <Route path="/about">
                    <About />
                </Route> 
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
          </div>      
        </Router> 
      </header>
    </div>
  );
}

export default App;
