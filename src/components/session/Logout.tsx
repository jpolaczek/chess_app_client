import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { UseStateType } from '../../types/state-types';

const Logout = ({ setLoggedIn }: UseStateType) => {
    return (
        <Nav.Item className="px-3">
            <Button onClick={() => {
                axios.delete("/api/sign_out").then(() => {
                    setLoggedIn(false)
                })
            }}>Log out</Button>
        </Nav.Item>
    );
}

export default Logout;