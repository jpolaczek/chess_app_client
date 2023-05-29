import Piece from "../pieces/Piece"

type SubSet = {
    [y: number]: FieldInfo
}

type FieldInfo = {
    piece: Piece | null
    highlighted: boolean
}

export default SubSet