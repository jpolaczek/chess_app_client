import axios from "axios";

const fetchSessionData = (
    setLoggedIn: (loggedIn: boolean)=> void,
    setUsername: (username: string)=> void,
    setUserId: (setUserId: number)=> void,
    setError: (error: string)=> void,
    setLoading: (setLoading: boolean) => void
    ) => {

    axios.get('/api/session_data').then(res =>{
            setLoggedIn(res.data.signed_in)
            setLoading(false)
            setUsername(res.data.username)
            setUserId(res.data.userId)
            console.log('success!')
        }, error => {
            console.log(error)
            setError(error.message)
        }
    );
}
 
export default fetchSessionData;