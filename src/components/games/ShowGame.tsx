import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Set from "./board/Set";
import fetchPieces from "../../fetchers/pieces";
import InitializeBoard, { BoardData } from "./board/InitializeBoard";
import Board from "./board/Board";

const ShowGame = () => {
    const { id }: { id: string } = useParams();
    const chessBoard: BoardData = InitializeBoard(8)
    const [loading, setLoading] = useState(true)
    const [pieces, setPieces] = useState({} as Set)

    useEffect(() => {
        fetchPieces(Number(id), setPieces)
        setLoading(false)
    }, [])

    return (
        <div>
            <h3>Game {id}</h3>
            {!loading && <Board boardData={chessBoard} pieces={pieces} />}
        </div >
    );
}



export default ShowGame;
