import {Routes, Route, Link} from "react-router-dom"
// import { Header } from "../components/Header/Header"
import {All} from "../components/All"
import { Users } from "./Users"

export const Private = () =>{
    return (
        <Routes>
            <Route path="/*"  element={<All/>}/>
            <Route path="/users"  element={<Users/>} />
            <Route path="*" element={<>Error 404!!!</>}/>
        </Routes>
    )
}


