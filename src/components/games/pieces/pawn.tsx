import WhitePawnPicture from '../../../static/whitePawn.png'
import BlackPawnPicture from '../../../static/blackPawn.png'

import { Position } from './position'

interface Pawn extends Position {
    colour: boolean
}

const Pawn = ({ x, y, colour }: Pawn) => {
    const img: string = colour ? WhitePawnPicture : BlackPawnPicture

    return (
        <span>
            {<img src={img} height={"25px"} />}
        </span>
    )
}

export default Pawn