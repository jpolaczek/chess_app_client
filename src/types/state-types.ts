import { Position } from "../components/games/pieces/position"

export interface UseStateType {
    setLoggedIn: (loggedIn: boolean) => void;
    setUsername: (username: string) => void;
}

export type setPosition = ({ x, y }: Position) => void