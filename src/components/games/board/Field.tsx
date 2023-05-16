const Field = ({ row, column }: { row: number, column: number }) => {
    return (
        < div
            className={`box ${(row + column) % 2 === 0
                ? "black" : "white"
                }`
            }
            key={column}
        >
        </div>
    )
}

export default Field;