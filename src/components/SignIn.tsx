import UserForm from "./UserForm";

const SignIn = () => {
    return (
        <div>
            <h3>Sign in:</h3>
            <UserForm redirectUrl='/' buttonName="Sign in" serverUrl="/api/sign_in" />
        </div>
    );
}

export default SignIn;
