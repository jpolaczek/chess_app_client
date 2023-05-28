import { FieldPosition } from "../pieces/position";

const Field = ({ x, y, children, colour, setTargetField }: FieldPosition & { children: JSX.Element | null, colour: string, setTargetField: ({ x, y }: FieldPosition) => void }) => {
    const onClickHandle = (x: number, y: number) => {
        if (!children) {
            setTargetField({ x, y })
        }
    }

    return (
        <div className={`box ${colour}`} onClick={() => onClickHandle(x, y)}
        >
            {children}
        </div>
    )
}

export default Field;