import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import fetchPieces from "../../fetchers/pieces";
import Board from "./board/Board";
import { Position } from "./pieces/position";
import ChessSet from "./board/Set";

const ShowGame = () => {
    const { id }: { id: string } = useParams();
    const [loading, setLoading] = useState(true)
    const [pieces, setPieces] = useState<ChessSet>({})
    const [movingPiece, setMovingPiece] = useState({ x: 0, y: 0 } as Position)
    const [targetField, setTargetField] = useState({ x: 0, y: 0 } as Position)

    useEffect(() => {
        fetchPieces(Number(id), setPieces)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (movingPiece.x && movingPiece.y) {
            const updatedPieces = { ...pieces };
            updatedPieces[targetField.y][targetField.x].piece = updatedPieces[movingPiece.y][movingPiece.x].piece
            updatedPieces[movingPiece.y][movingPiece.x].piece = null
            updatedPieces[movingPiece.y][movingPiece.x].highlighted = false

            setPieces(updatedPieces)
            setMovingPiece({ x: 0, y: 0 })
            setMovingPiece({ x: 0, y: 0 })
        }
    }, [targetField])

    useEffect(() => {
        if (movingPiece.x && movingPiece.y) {
            const updatedPieces = { ...pieces };

            Object.entries(updatedPieces).forEach(([y, subset]) => {
                Object.entries(subset).forEach(([x, _]) => {
                    if (Number(x) != movingPiece.x || Number(y) != movingPiece.y) {
                        updatedPieces[Number(y)][Number(x)].highlighted = false
                    }
                })
            })
            updatedPieces[movingPiece.y][movingPiece.x].highlighted = true
            setPieces(updatedPieces)
        }
    }, [movingPiece])

    return (
        <div>
            <h3>Game {id}</h3>
            {!loading && <Board pieces={pieces} setMovingPiece={setMovingPiece} setTargetField={setTargetField} movingPiece={movingPiece} />}
        </div >
    );
}



export default ShowGame;
