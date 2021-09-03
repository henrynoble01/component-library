// import { Route, BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import EcoPrefrences from "./pages/EcoPrefrences";
import { SideBar, NavBar } from "./component/index";

function App() {
  return (
    <Router>
      <div className='App'>
        <SideBar />
        <NavBar />
        {/* <nav>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/EcoPrefrences'> EcoPrefrences </Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/EcoPrefrences' component={EcoPrefrences} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
