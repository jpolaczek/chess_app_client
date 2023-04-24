import axios from "axios";
import { FormEvent } from "react";
import UserForm from "./UserForm";
import { UseStateType } from "../types/state-types";

const Signup = () => {
    return (
        <div>
            <h3>Sign up:</h3>
            <UserForm callback={null} serverUrl='/api/sign_up' redirectUrl="/sign_in" buttonName="Sign up" />
        </div>
    );
}

export default Signup;
