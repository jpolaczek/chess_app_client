import Colours from "../pieces/Colours";
import PieceMaker from "../pieces/PieceMaker";
import { FieldPosition, PawnPosition } from "../pieces/position";
import Field from "./Field";
import SubSet from "./SubSet";

const Row = ({ y, row, setMovingPiece, setTargetField }: { y: number, row: SubSet, setMovingPiece: ({ x, y }: PawnPosition) => void, setTargetField: ({ x, y }: FieldPosition) => void }) => {
    const log = (arg: string) => {
        console.log(arg)
    }

    return (
        < div className="chess-row" key={y} >
            {
                Object.entries(row).map(([x, fieldInfo]) => (
                    < Field x={Number(x)} y={y} highlighted={fieldInfo.highlighted} colour={(y + Number(x)) % 2 === 0 ? Colours.White : Colours.Black} setTargetField={setTargetField} setMovingPiece={setMovingPiece}>
                        {PieceMaker({
                            x: Number(x),
                            y: y,
                            piece: fieldInfo?.piece
                        })}
                    </Field>
                ))
            }
        </div >
    )
}

export default Row
