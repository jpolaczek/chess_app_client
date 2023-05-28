import WhitePawnPicture from '../../../static/whitePawn.png'
import BlackPawnPicture from '../../../static/blackPawn.png'

import { PawnPosition } from './position'

interface PawnType extends PawnPosition {
    colour: boolean | null
}

const Pawn = ({ x, y, colour, setMovingPiece }: PawnType & { setMovingPiece: ({ x, y }: PawnPosition) => void }) => {
    const img: string = colour ? WhitePawnPicture : BlackPawnPicture

    const onClickHandle = ({ x, y }: PawnPosition) => {
        setMovingPiece({ x, y })
    }

    return (
        <span onClick={() => onClickHandle({ x, y })}>
            {<img src={img} height={"25px"} />}
        </span>
    )
}

export default Pawn