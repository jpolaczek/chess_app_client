import Set from "../board/Set";
import { BoardData } from "./InitializeBoard"
import Row from "./Row"
import RowData from "./RowData"

const Board = ({ boardData, pieces }: { boardData: BoardData, pieces: Set }) => {
    return (
        <div>
            {boardData.rows.map((row: RowData) => {
                return <Row row={row} pieces={pieces[row.index]} />
            })}
        </div>
    )
}

export default Board
