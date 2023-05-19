import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "./board/Row";
import RowType from "./board/RowType";
import SetType from "./board/SetType";

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
        const pieces = {
            1: {
                0: "pawn"
            }
        } as SetType

        return chessBoard.map((row, rIndex) => {
            return <Row row={row} rowIndex={rIndex} pieces={pieces[rIndex]} />
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
