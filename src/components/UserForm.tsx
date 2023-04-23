import axios from "axios";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

type HandleSubmitType = {
    serverUrl: string,
    redirectUrl: string,
    buttonName: string
}

const UserForm = ({ serverUrl, redirectUrl, buttonName }: HandleSubmitType) => {
    const [playersName, setPlayersName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post(serverUrl, { name: playersName, password: password })
            .then(() => { history.push(redirectUrl) })
    }

    return (
        <form onSubmit={handleSubmit}>
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
