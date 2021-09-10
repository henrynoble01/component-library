import React, { useEffect, useReducer, createContext } from "react";
import { ToggleProvider } from "./Context/ToggleContexts";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Home from "./pages/Home";
import { SideBar, NavBar } from "./components/index";
import { EcoPrefenceWrapper, LoginPage } from "./Containers/index";

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  username: null,
  email: null,
  password: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // localStorage.setItem("username", JSON.stringify(action.payload.username));
      localStorage.setItem("email", JSON.stringify(action.payload.email));
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        email: action.payload.email,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // const username = JSON.parse(localStorage.getItem("username") || null);
    const email = JSON.parse(localStorage.getItem("email") || null);

    if (email) {
      dispatch({
        type: "LOGIN",
        payload: {
          email,
        },
      });
    }
  }, []);

  return (
    <Router>
      <AuthContext.Provider value={{ state, dispatch }}>
        <ToggleProvider>
          <div className='App'>
            {state.isAuthenticated ? (
              <>
                <NavBar />
                <SideBar />
              </>
            ) : (
              <LoginPage />
            )}

            {/* <ContentContainer toggleBtn={toggleBtn}>
          <EcoPrefrences />
        </ContentContainer> */}
            <Switch>
              {/* <Route path='/' exact component={LoginPage} /> */}
              {/* <Route path='/login' exact component={LoginPage} /> */}
              <Route path='/EcoPrefrences' component={EcoPrefenceWrapper} />
            </Switch>
          </div>
        </ToggleProvider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
