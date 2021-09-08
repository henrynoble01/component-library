import React, { useState } from "react";
import { ToggleProvider } from "./Context/ToggleContexts";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Home from "./pages/Home";
import { SideBar, NavBar } from "./components/index";
import { EcoPrefenceWrapper, LoginPage } from "./Containers/index";

function App() {
  const [userLoged, setUserLoged] = useState(false);
  return (
    <Router>
      <ToggleProvider>
        <div className='App'>
          {userLoged ? (
            <>
              <NavBar />
              <SideBar />
            </>
          ) : (
            ""
          )}

          {/* <ContentContainer toggleBtn={toggleBtn}>
          <EcoPrefrences />
        </ContentContainer> */}

          <Switch>
            <Route path='/' exact component={LoginPage} />
            <Route path='/EcoPrefrences' component={EcoPrefenceWrapper} />
          </Switch>
        </div>
      </ToggleProvider>
    </Router>
  );
}

export default App;
