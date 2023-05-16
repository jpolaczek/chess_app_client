import axios from "axios";
import { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

const CreateGame = () => {
    const [gamesName, setGamesName] = useState('');
    const history = useHistory();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        axios.post('/api/games/create', { name: gamesName })
            .then((res) => {
                history.push("/")
            })
    }

    return (
        <div>
            <h3>Create new Game</h3>
            <form onSubmit={handleSubmit}>
                <label>games name:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => setGamesName(e.target.value)}
                />
                <button>Create Game!</button>
            </form>
        </div>
    );
}

export default CreateGame;
