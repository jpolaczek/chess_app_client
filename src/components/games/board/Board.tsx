import ChessSet from "../board/Set";
import Row from "./Row"
import { setPosition } from "../../../types/state-types"
import { Position } from "../pieces/position";


const Board = ({ pieces, setMovingPiece, setTargetField, movingPiece }: { pieces: ChessSet, setMovingPiece: setPosition, setTargetField: setPosition, movingPiece: Position }) => {
    return (
        <div>
            {Object.entries(pieces).map(([y, subset]) => (
                <Row y={Number(y)} row={subset} setMovingPiece={setMovingPiece} setTargetField={setTargetField} movingPiece={movingPiece} />
            ))}
        </div>
    )
}

export default Board
