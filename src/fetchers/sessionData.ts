import axios from "axios";

const fetchSessionData = (
    setLoggedIn: (loggedIn: boolean)=> void,
    setUsername: (username: string)=> void,
    setError: (error: string)=> void,
    ) => {

    axios.get('/api/session_data').then(res =>{
            setLoggedIn(res.data.signed_in)
            setUsername(res.data.username)
            console.log('success!')
        }, error => {
            console.log(error)
            setError(error.message)
        }
    );
}
 
export default fetchSessionData;