import UserForm from "./UserForm";

const Signup = () => {
    return (
        <div>
            <h3>Sign up:</h3>
            <UserForm serverUrl='/api/sign_up' redirectUrl="/sign_in" buttonName="Sign up" />
        </div>
    );
}

export default Signup;
