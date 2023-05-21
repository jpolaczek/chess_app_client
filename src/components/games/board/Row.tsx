import Field from "./Field";
import RowType from "./RowType";
import SubSet from "./SubSet";

const Row = ({ row, rowIndex, pieces }: { row: RowType, rowIndex: number, pieces: SubSet | null }) => {
    return (
        <div className="chess-row" key={rowIndex}>
            {row.fields.map((_, cIndex) => {
                if (pieces && pieces[cIndex]) {
                    return <Field row={rowIndex} column={cIndex} piece={pieces[cIndex]} />
                } else {
                    return <Field row={rowIndex} column={cIndex} piece={null} />
                }
            })}
        </div>
    )
}

export default Row
