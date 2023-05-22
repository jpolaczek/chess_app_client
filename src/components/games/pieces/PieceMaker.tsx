import Pawn from "./Pawn"
import Piece from "./Piece"
import Pieces from "./Pieces"
import { Position } from "./position"

const PieceMaker = ({ x, y, pieceType, colour }: Position & Piece) => {
    switch (pieceType) {
        case Pieces.Pawn: {
            return (<Pawn x={x} y={y} colour={colour} />)
        }
    }
}

export default PieceMaker