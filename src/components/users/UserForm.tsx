import axios from "axios";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { UseStateType } from "../../types/state-types";

type HandleSubmitType = {
    serverUrl: string,
    redirectUrl: string,
    buttonName: string
    callback: UseStateType['setLoggedIn'] | null
}

const UserForm = ({ serverUrl, redirectUrl, buttonName, callback }: HandleSubmitType) => {
    const [playersName, setPlayersName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (callback: (UseStateType['setLoggedIn'] | null)) => (e: FormEvent) => {
        e.preventDefault();
        axios.post(serverUrl, { name: playersName, password: password })
            .then((res) => {
                if (callback) {
                    callback(res.data.signed_in)
                }
                history.push(redirectUrl)
            })
    }

    return (
        <form onSubmit={handleSubmit(callback)}>
            <label>players name:</label>
            <input
                type="text"
                required
                value={playersName}
                onChange={(e) => setPlayersName(e.target.value)}
            />
            <label>players password:</label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>{buttonName}</button>
        </form>
    );
}

export default UserForm;
