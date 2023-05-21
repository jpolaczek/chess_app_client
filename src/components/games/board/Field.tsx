import PieceMaker from "../pieces/PieceMaker";
import Piece from "./Piece";

const Field = ({ row, column, piece }: { row: number, column: number, piece: Piece | null }) => {
    return (
        < div
            className={`box ${(row + column) % 2 === 0
                ? "brown" : "white"
                }`
            }
            key={column}
        >
            {piece && PieceMaker({ x: row, y: column, pieceType: piece.pieceType, colour: piece.colour })}
        </div>
    )
}

export default Field;