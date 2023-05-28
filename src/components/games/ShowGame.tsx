import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchPieces from "../../fetchers/pieces";
import Board from "./board/Board";
import { FieldPosition, PawnPosition } from "./pieces/position";
import ChessSet from "./board/Set";

const ShowGame = () => {
    const { id }: { id: string } = useParams();
    const [loading, setLoading] = useState(true)
    const [pieces, setPieces] = useState<ChessSet>({})
    const [movingPiece, setMovingPiece] = useState({} as PawnPosition)
    const [targetField, setTargetField] = useState({} as FieldPosition)

    useEffect(() => {
        fetchPieces(Number(id), setPieces)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (movingPiece.x && movingPiece.y) {
            const updatedPieces = { ...pieces };
            updatedPieces[targetField.y][targetField.x] = updatedPieces[movingPiece.y][movingPiece.x]
            updatedPieces[movingPiece.y][movingPiece.x] = null
            setPieces(updatedPieces)
        }
    }, [targetField.x, targetField.y])

    return (
        <div>
            <h3>Game {id}</h3>
            {!loading && <Board pieces={pieces} setMovingPiece={setMovingPiece} setTargetField={setTargetField} />}
        </div >
    );
}



export default ShowGame;
