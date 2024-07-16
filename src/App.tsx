import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/users/Signup";
import SignIn from "./components/session/SignIn";
import Home from "./components/Home";
import fetchSessionData from "./fetchers/sessionData";
import { useState, useEffect } from "react";
import CreateGame from "./components/games/CreateGame";
import PrivateRoute from "./components/PrivateRoute";
import ShowGame from "./components/games/ShowGame";
import NavMenu from "./components/navbar/NavMenu";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSessionData(setLoggedIn, setUsername, setUserId, setError, setLoading);
  }, []);
  return (
    <Router>
      <div className="App">
        <NavMenu
          handleLogout={setLoggedIn}
          loggedIn={loggedIn}
          username={username}
          error={error}
        ></NavMenu>
        <div className="content">
          {!loading && (
            <Switch>
              <Route exact path="/sign_up">
                <Signup />
              </Route>
              <Route exact path="/sign_in">
                <SignIn setLoggedIn={setLoggedIn} setUsername={setUsername} />
              </Route>
              <Route exact path="/games/new">
                <PrivateRoute isLogged={loggedIn}>
                  <CreateGame />
                </PrivateRoute>
              </Route>
              <Route exact path="/games/:id">
                <PrivateRoute isLogged={loggedIn}>
                  <ShowGame />
                </PrivateRoute>
              </Route>
              <Route exact path="/home">
                <Home loggedIn={loggedIn} userId={userId} />
              </Route>
              <Route exact path="/">
                <Home loggedIn={loggedIn} userId={userId} />
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
