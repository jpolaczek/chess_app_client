import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

const ListMyGames = () => {
    const [gamesList, setGamesList] = useState([{ name: "", id: "" }]);

    useEffect(() => {
        axios.get('/api/games/private')
            .then((res) => {
                setGamesList(res.data['object'])
            })
    }, [])

    function NumberList(): JSX.Element {
        const listItems = gamesList.map((game) =>
            <ListGroup.Item><Link to={`/games/${game.id}`}>{game.id}. {game.name}</Link></ListGroup.Item >
        );
        return (
            <ListGroup>{listItems}</ListGroup>
        );
    }

    return (
        <div>
            <h3>Your Games</h3>
            {NumberList()}
        </div>
    );
}

export default ListMyGames;
