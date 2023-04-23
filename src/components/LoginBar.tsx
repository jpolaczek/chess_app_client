import fetchSessionData from "../fetchers/sessionData";
import Nav from 'react-bootstrap/Nav';

const LoginBar = () => {
    const { loggedIn, username, error } = fetchSessionData()

    return (
        <Nav activeKey="/home" className="navbar">
            <Nav.Item>
                {error && <div>{error}</div>}
                {loggedIn && <div> Logged in as: {username}</div>}
            </Nav.Item>
        </Nav>
    );
}

export default LoginBar;