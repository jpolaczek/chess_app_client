import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "./board/Row";
import RowType from "./board/RowType";
import Set from "./board/Set";
import fetchPieces from "../../fetchers/pieces";

const ShowGame = () => {
    const { id }: { id: string } = useParams();
    const length: number = 8
    const [chessBoard, setChessBoard] = useState([{} as RowType]);
    const [loading, setLoading] = useState(true)
    const [pieces, setPieces] = useState({} as Set)

    useEffect(() => {
        const rows = []

        for (let i = 0; i < length; i++) {
            let newRow: RowType = { fields: Array.from({ length: length }) }
            rows.push(newRow)
        }
        setChessBoard(rows)
        fetchPieces(Number(id), setPieces)

        setLoading(false)
    }, [])

    const renderBoard = (): JSX.Element[] => {
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
