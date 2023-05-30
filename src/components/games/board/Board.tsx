import ChessSet from "../board/Set";
import Row from "./Row"
import { setPosition } from "../../../types/state-types"


const Board = ({ pieces, setMovingPiece, setTargetField }: { pieces: ChessSet, setMovingPiece: setPosition, setTargetField: setPosition }) => {
    return (
        <div>
            {Object.entries(pieces).map(([y, subset]) => (
                <Row y={Number(y)} row={subset} setMovingPiece={setMovingPiece} setTargetField={setTargetField} />
            ))}
        </div>
    )
}

export default Board
