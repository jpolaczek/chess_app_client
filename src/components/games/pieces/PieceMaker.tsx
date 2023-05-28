import Pawn from "./Pawn"
import Pieces from "./Pieces"
import { PawnPosition } from "./position"

const PieceMaker = ({ x, y, piece, setMovingPiece }: PawnPosition & { piece: { pieceType: number, colour: boolean } | null } & { setMovingPiece: ({ x, y }: PawnPosition) => void }): JSX.Element | null => {
    if (piece) {
        switch (piece.pieceType) {
            case Pieces.Pawn: {
                return <Pawn x={x} y={y} colour={piece.colour} setMovingPiece={setMovingPiece} />
            }
        }
    }
    return null
}

export default PieceMaker