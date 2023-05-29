import Pawn from "./Pawn"
import Piece from "./Piece"
import Pieces from "./Pieces"
import { PawnPosition } from "./position"

const PieceMaker = ({ x, y, piece }: PawnPosition & { piece: Piece | null }): JSX.Element | null => {
    if (piece) {
        switch (piece.pieceType) {
            case Pieces.Pawn: {
                return <Pawn x={x} y={y} colour={piece.colour} />
            }
        }
    }
    return null
}

export default PieceMaker