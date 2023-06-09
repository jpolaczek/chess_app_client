import { setPosition } from "../../../types/state-types";
import Colours from "../pieces/Colours";
import PieceMaker from "../pieces/PieceMaker";
import { Position } from "../pieces/position";
import Field from "./Field";
import SubSet from "./SubSet";

const Row = ({ y, row, setMovingPiece, setTargetField, movingPiece }: { y: number, row: SubSet, setMovingPiece: setPosition, setTargetField: setPosition, movingPiece: Position }) => {
    return (
        < div className="chess-row" key={y} >
            {
                Object.entries(row).map(([x, fieldInfo]) => (
                    < Field x={Number(x)} y={y} highlighted={fieldInfo.highlighted} colour={(y + Number(x)) % 2 === 0 ? Colours.White : Colours.Black} setTargetField={setTargetField} setMovingPiece={setMovingPiece} movingPiece={movingPiece}>
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
