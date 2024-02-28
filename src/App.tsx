import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Signup from "./components/users/Signup";
import SignIn from "./components/session/SignIn";
import Home from "./components/Home";
import fetchSessionData from "./fetchers/sessionData";
import Login from "./components/navbar/Login";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
import CreateGame from "./components/games/CreateGame";
import PrivateRoute from "./components/PrivateRoute";
import ShowGame from "./components/games/ShowGame";
import UserDropdown from "./components/navbar/UserDropdown";
import SignUp from "./components/navbar/SignUp";

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
        <Navbar bg="light" expand="lg">
          <Container>
            <Nav>
              <Navbar.Brand href="#home">Amazing Chess App</Navbar.Brand>
            </Nav>
            <Navbar.Collapse id="justify-content-end" style={{ flex: "none" }}>
              {loggedIn && (
                <UserDropdown
                  userName={username}
                  handleLogout={setLoggedIn}
                ></UserDropdown>
              )}
              {!loggedIn && <Login loggedIn={loggedIn} error={error} />}
              {!loggedIn && <SignUp loggedIn={loggedIn} error={error} />}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content">
          {!loading && (
            <Switch>
              <Route exact path="/sign_up">
                <Signup />
              </Route>
              <Route exact path="/sign_in">
                <SignIn setLoggedIn={setLoggedIn} />
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
