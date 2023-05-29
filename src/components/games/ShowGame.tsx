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
            let fieldInfo = updatedPieces[targetField.y][targetField.x]
            fieldInfo.piece = updatedPieces[movingPiece.y][movingPiece.x].piece
            updatedPieces[movingPiece.y][movingPiece.x].piece = null
            updatedPieces[movingPiece.y][movingPiece.x].highlighted = false

            setPieces(updatedPieces)
        }
    }, [targetField.x, targetField.y])

    useEffect(() => {
        if (movingPiece.x && movingPiece.y) {
            pieces[movingPiece.y][movingPiece.x].highlighted = true
            setPieces(pieces)
        }
    }, [movingPiece.x, movingPiece.y])



    return (
        <div>
            <h3>Game {id}</h3>
            {!loading && <Board pieces={pieces} setMovingPiece={setMovingPiece} setTargetField={setTargetField} />}
        </div >
    );
}



export default ShowGame;
