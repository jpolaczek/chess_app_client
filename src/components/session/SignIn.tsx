import { UseStateType } from "../../types/state-types";
import UserForm from "../users/UserForm";

const SignIn = ({ setLoggedIn, setUsername }: UseStateType) => {
  const callback = (loggedIn: boolean, username: string) => {
    setLoggedIn(loggedIn);
    setUsername(username);
  };

  return (
    <div>
      <h3>Sign in:</h3>
      <UserForm
        callback={callback}
        redirectUrl="/home"
        buttonName="Sign in"
        serverUrl="/api/sign_in"
      />
    </div>
  );
};

export default SignIn;
