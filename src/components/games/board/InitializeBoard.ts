import Colours from "../pieces/Colours";
import RowData from "./RowData";

export type BoardData = {
    rows: RowData[]
}

const InitializeBoard = (length: number): BoardData => {
    const arr: number[] = Array.from({ length: length })

    return {
        rows: arr.map((_, y) => {
            return {
                fields: arr.map((_, x) => {
                    return {
                        colour: (y + x) % 2 === 0 ? Colours.White : Colours.Black,
                        x: x,
                        y: y,
                    };
                }),
                index: y
            };
        }),
    }
}

export default InitializeBoard