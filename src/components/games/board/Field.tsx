import { useEffect, useState } from "react";
import { Position } from "../pieces/position";
import { setPosition } from "../../../types/state-types";

const Field = ({
    x,
    y,
    children,
    colour,
    highlighted,
    setTargetField,
    setMovingPiece
}: Position &
    {
        children: JSX.Element | null;
        colour: string;
        highlighted: boolean,
        setTargetField: setPosition,
        setMovingPiece: setPosition
    }) => {
    const onClickHandle = (x: number, y: number) => {
        if (!children) {
            setTargetField({ x, y });
        } else {
            setMovingPiece({ x, y });
        }
    };

    useEffect(() => {
        if (!highlighted) {
            setFieldColour(colour)
        } else {
            setFieldColour('yellow')
        }
    }, [highlighted])

    const [fieldColour, setFieldColour] = useState(colour);

    return (
        <div
            className={`box ${fieldColour}`}
            onClick={() => onClickHandle(x, y)}
        >
            {children}
        </div>
    );
};

export default Field;