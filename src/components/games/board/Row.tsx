import Field from "./Field";
import RowType from "./RowType";

const Row = ({ row, rowIndex }: { row: RowType, rowIndex: number }) => {
    return (
        <div className="chess-row" key={rowIndex}>
            {row.fields.map((_, cIndex) => {
                return <Field row={rowIndex} column={cIndex} />
            })}
        </div>
    )
}

export default Row
