import PieceMaker from "../pieces/PieceMaker";

const Field = ({ row, column, piece }: { row: number, column: number, piece: string | null }) => {
    return (
        < div
            className={`box ${(row + column) % 2 === 0
                ? "black" : "white"
                }`
            }
            key={column}
        >
            {piece && PieceMaker({ x: row, y: column, type: piece })}
        </div>
    )
}

export default Field;