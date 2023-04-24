import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

interface AuthData {
    loggedIn: boolean
    username: string
    error: string
}

const Login = ({ loggedIn, username, error }: AuthData) => {
    return (
        <Nav.Item className="px-3">
            {error && <div>{error}</div>}
            {loggedIn && <div> Logged in as: {username}</div>}
            {!loggedIn && <Link to='/sign_in'>Sign in</Link>}
        </Nav.Item>
    );
}

export default Login;