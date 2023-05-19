import WhitePawnPicture from '../../../static/whitePawn.png'

const Pawn = ({ x, y }: Position) => {
    return (
        <span>
            <img src={WhitePawnPicture} width={"25px"} />
        </span>
    )
}

export default Pawn