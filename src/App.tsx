import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Home from './components/Home';
import fetchSessionData from './fetchers/sessionData';
import LoginBar from './components/LoginBar';

function App() {
  const { loggedIn, username, error } = fetchSessionData()

  return (

    <Router>
      <div className="App">
        <LoginBar />
        <div className="content">
          <Switch>
            <Route exact path="/sign_up">
              <Signup />
            </Route>
            <Route exact path="/sign_in">
              <SignIn />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

