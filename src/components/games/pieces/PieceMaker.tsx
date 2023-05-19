import Pawn from "./pawn"

const PieceMaker = ({ x, y, type }: Position & { type: string }) => {
    switch (type) {
        case "pawn": {
            return (<Pawn x={x} y={y} />)
        }
    }
}

export default PieceMaker