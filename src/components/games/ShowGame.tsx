import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Field from "./board/Field";
import Row from "./board/Row";

type RowType = {
    fields: FieldType[]
}

type FieldType = {
    color: 0 | 1
    positionX: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    positionY: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

const ShowGame = () => {
    const { id }: { id: string } = useParams();
    const length: number = 8
    const [chessBoard, setChessBoard] = useState([{} as RowType]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const rows = []

        for (let i = 0; i < length; i++) {
            let newRow: RowType = { fields: Array.from({ length: length }) }
            rows.push(newRow)
        }
        setChessBoard(rows)
        setLoading(false)
    }, [])

    const renderBoard = (): JSX.Element[] => {
        return chessBoard.map((row, rIndex) => {
            return <Row row={row} rowIndex={rIndex} />
        })
    }

    return (
        <div>
            <h3>Game {id}</h3>
            {!loading && renderBoard()}
        </div >
    );
}



export default ShowGame;
