import WhitePawnPicture from '../../../static/whitePawn.png'
import BlackPawnPicture from '../../../static/blackPawn.png'

import { Position } from './position'

interface PawnType extends Position {
    colour: boolean | null
}

const Pawn = ({ x, y, colour }: PawnType) => {
    const img: string = colour ? WhitePawnPicture : BlackPawnPicture

    return (
        <span>
            {<img src={img} height={"25px"} />}
        </span>
    )
}

export default Pawn