import Login from "./Login";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import UserDropdown from "./UserDropdown";
import SignUp from "./SignUp";
import AuthData from "../../types/authData";

interface NavProps extends AuthData {
  handleLogout: (props: any) => void;
}

const NavMenu = ({ handleLogout, loggedIn, username, error }: NavProps) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <Navbar.Brand href="#home">Amazing Chess App</Navbar.Brand>
        </Nav>
        <Navbar.Collapse id="justify-content-end" style={{ flex: "none" }}>
          {loggedIn && username && (
            <UserDropdown
              userName={username}
              handleLogout={handleLogout}
            ></UserDropdown>
          )}
          {!loggedIn && <Login loggedIn={loggedIn} error={error} />}
          {!loggedIn && <SignUp loggedIn={loggedIn} error={error} />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
