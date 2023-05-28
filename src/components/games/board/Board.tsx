import ChessSet from "../board/Set";
import { FieldPosition, PawnPosition } from "../pieces/position";
import Row from "./Row"

const Board = ({ pieces, setMovingPiece, setTargetField }: { pieces: ChessSet, setMovingPiece: ({ x, y }: PawnPosition) => void, setTargetField: ({ x, y }: FieldPosition) => void }) => {
    return (
        <div>
            {Object.entries(pieces).map(([y, subset]) => (
                <Row y={Number(y)} row={subset} setMovingPiece={setMovingPiece} setTargetField={setTargetField} />
            ))}
        </div>
    )
}

export default Board
