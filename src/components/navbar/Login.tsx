import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import AuthData from "../../types/authData";

const Login = ({ loggedIn, error }: AuthData) => {
  return (
    <Button variant="outline-primary" style={{ marginRight: "6px" }}>
      {error && <div>{error}</div>}
      {!loggedIn && <Nav.Link href="/sign_in">Sign in</Nav.Link>}
    </Button>
  );
};

export default Login;
