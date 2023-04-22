import axios from "axios";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [playersName, setPlayersName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post('/api/sign_up', { name: playersName, password: password })
            .then(() => { alert('success post') })
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
            <button>Signup</button>
        </form>
    );
}

export default Signup;
