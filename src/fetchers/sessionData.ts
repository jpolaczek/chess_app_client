import axios from "axios";
import { useEffect, useState } from "react";

const fetchSessionData = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('/api/session_data')
            .then(res =>{
                setLoggedIn(res.data.signed_in)
                setUsername(res.data.username)
            }, error => {
                console.log(error)
                setError(error.message)
            })
    }, [])

    return { loggedIn, username, error };
}
 
export default fetchSessionData;