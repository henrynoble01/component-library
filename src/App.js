import React, { useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Home from "./pages/Home";
import { SideBar, NavBar } from "./component/index";
import { EcoPrefenceWrapper } from "./pages/index";

function App() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const toggle = () => setToggleBtn((val) => !val);
  return (
    <Router>
      <div className='App'>
        <NavBar toggle={toggle} />
        <SideBar toggleBtn={toggleBtn} />
        {/* <ContentContainer toggleBtn={toggleBtn}>
          <EcoPrefrences />
        </ContentContainer> */}

        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/EcoPrefrences' component={EcoPrefenceWrapper} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
