import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Home from './components/Home';
import fetchSessionData from './fetchers/sessionData';
import Login from './components/Login';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Logout from './components/Logout';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSessionData(setLoggedIn, setUsername, setError)
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
          <Switch>
            <Route exact path="/sign_up">
              <Signup />
            </Route>
            <Route exact path="/sign_in">
              <SignIn setLoggedIn={setLoggedIn} />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;

