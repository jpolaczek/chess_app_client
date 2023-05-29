import { useEffect, useState } from "react";
import { FieldPosition, PawnPosition } from "../pieces/position";

const Field = ({
    x,
    y,
    children,
    colour,
    highlighted,
    setTargetField,
    setMovingPiece
}: FieldPosition &
    {
        children: JSX.Element | null;
        colour: string;
        highlighted: boolean,
        setTargetField: ({ x, y }: FieldPosition) => void;
    } & {
        setMovingPiece: ({ x, y }: PawnPosition) => void;
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