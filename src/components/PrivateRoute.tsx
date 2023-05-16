import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isLogged }: { children: JSX.Element, isLogged: boolean }): JSX.Element => {
    return (
        (isLogged) ? children : <Redirect to="/sign_in" />
    );
};

export default PrivateRoute;
