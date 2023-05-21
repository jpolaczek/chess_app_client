import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Signup from './components/users/Signup';
import SignIn from './components/session/SignIn';
import Home from './components/Home';
import fetchSessionData from './fetchers/sessionData';
import Login from './components/session/Login';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Logout from './components/session/Logout';
import { useState, useEffect } from 'react';
import CreateGame from './components/games/CreateGame';
import PrivateRoute from './components/PrivateRoute';
import ShowGame from './components/games/ShowGame';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSessionData(setLoggedIn, setUsername, setUserId, setError, setLoading)
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Nav>
              <Login loggedIn={loggedIn} username={username} error={error} />
              {loggedIn &&
                <Nav.Item>
                  <Logout setLoggedIn={setLoggedIn} />
                </Nav.Item>
              }
              <Nav.Item>
                <Link to='/'>Home</Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <div className="content">
          {!loading &&
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
          }
        </div>
      </div>
    </Router >
  );
}

export default App;

