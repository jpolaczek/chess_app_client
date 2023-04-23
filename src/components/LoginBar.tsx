import fetchSessionData from "../fetchers/sessionData";

const LoginBar = () => {
    const { loggedIn, username, error } = fetchSessionData()

    return (
        <div className='loginBar'>
            {error && <div>{error}</div>}
            {loggedIn && <div> Logged in as: {username}</div>}
        </div>
    );
}

export default LoginBar;