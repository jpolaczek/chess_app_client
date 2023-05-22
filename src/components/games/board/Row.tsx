import Field from "./Field";
import RowData from "./RowData";
import SubSet from "./SubSet";

const Row = ({ row, pieces }: { row: RowData, pieces: SubSet | null }) => {
    return (
        <div className="chess-row" key={row.index}>
            {row.fields.map((field) => {
                if (pieces && pieces[field.y]) {
                    return <Field row={field.x} column={field.y} piece={pieces[field.y]} colour={field.colour} />
                } else {
                    return <Field row={field.x} column={field.y} piece={null} colour={field.colour} />
                }
            })}
        </div>
    )
}

export default Row
