import axios from "axios";
import ChessSet from "../components/games/board/Set";

const fetchPieces = (gameId: number, setPieces: (pieces: ChessSet)=> void) => {
    axios.get('/api/games/' + gameId + '/pieces').then(res =>{
            setPieces(res.data.object)
        }, error => {
            console.log("error while getting pieces")
            console.log(error)
        }
    );
}
 
export default fetchPieces;

