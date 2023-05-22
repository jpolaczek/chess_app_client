import PieceMaker from "../pieces/PieceMaker";
import Piece from "../pieces/Piece";

const Field = ({ row, column, piece, colour }: { row: number, column: number, piece: Piece | null, colour: string }) => {
    return (
        <div className={`box ${colour}`} key={column}>
            {piece && PieceMaker({ x: row, y: column, pieceType: piece.pieceType, colour: piece.colour })}
        </div>
    )
}

export default Field;