import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import AuthData from "../../types/authData";

const SignUp = ({ loggedIn, error }: AuthData) => {
  return (
    <Button variant="outline-primary" style={{ marginRight: "6px" }}>
      {error && <div>{error}</div>}
      {!loggedIn && <Nav.Link href="/sign_up">Sign up</Nav.Link>}
    </Button>
  );
};

export default SignUp;
