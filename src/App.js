import React, { useState } from "react";
import { ToggleProvider } from "./Context/ToggleContexts";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Home from "./pages/Home";
import { SideBar, NavBar } from "./component/index";
import { EcoPrefenceWrapper } from "./pages/index";

function App() {
  // const [toggleBtn, setToggleBtn] = useState(false);
  // const toggle = () => setToggleBtn((val) => !val);
  return (
    <Router>
      <ToggleProvider>
        <div className='App'>
          <NavBar />
          <SideBar />
          {/* <ContentContainer toggleBtn={toggleBtn}>
          <EcoPrefrences />
        </ContentContainer> */}

          <Switch>
            {/* <Route path='/' exact component={Home} /> */}
            <Route path='/EcoPrefrences' component={EcoPrefenceWrapper} />
          </Switch>
        </div>
      </ToggleProvider>
    </Router>
  );
}

export default App;
