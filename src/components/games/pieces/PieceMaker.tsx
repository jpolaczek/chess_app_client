import Piece from "../board/Piece"
import Pawn from "./pawn"
import { Position } from "./position"

const PieceMaker = ({ x, y, pieceType, colour }: Position & Piece) => {
    switch (pieceType) {
        case 0: {
            return (<Pawn x={x} y={y} colour={colour} />)
        }
    }
}

export default PieceMaker