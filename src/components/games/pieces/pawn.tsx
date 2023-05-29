import WhitePawnPicture from '../../../static/whitePawn.png'
import BlackPawnPicture from '../../../static/blackPawn.png'

import { PawnPosition } from './position'

interface PawnType extends PawnPosition {
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