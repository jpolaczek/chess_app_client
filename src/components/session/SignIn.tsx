import { UseStateType } from "../../types/state-types";
import UserForm from "../users/UserForm";

const SignIn = ({ setLoggedIn }: UseStateType) => {
    const callback = (loggedIn: boolean) => {
        setLoggedIn(loggedIn)
    }

    return (
        <div>
            <h3>Sign in:</h3>
            <UserForm callback={callback} redirectUrl='/home' buttonName="Sign in" serverUrl="/api/sign_in" />
        </div>
    );
}

export default SignIn;
