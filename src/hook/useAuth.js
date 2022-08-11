
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const useAuth = () => {

    const {token, setToken} = useContext(AuthContext)

    console.log(token);

    return{token, setToken} 
}