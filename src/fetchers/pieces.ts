import axios from "axios";
import Set from "../components/games/board/Set";

const fetchPieces = (gameId: number, setPieces: (pieces: Set)=> void) => {
    axios.get('/api/games/' + gameId + '/pieces').then(res =>{
            console.log("successfully got pieces")
            console.log(res.data.object)
            setPieces(res.data.object)
        }, error => {
            console.log("error while getting pieces")
            console.log(error)
        }
    );
}
 
export default fetchPieces;

