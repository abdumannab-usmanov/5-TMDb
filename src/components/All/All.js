import { Header } from "../Header/Header"
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from '../Main/HomePage';
import { Popular } from '../Main/Popular/Popular';
import { RatedMovie } from '../Main/RatedMovie';
import { UpComing } from '../Main/UpComing';
import { TvShow } from '../Main/TvShow';

export function All(){
    return(
        <>
        <Header/>
        
        <div className="container">
			<Routes>
				<Route index  element={<HomePage/>}/>
				<Route path='/popular' element={<Popular/>}/>
				<Route path='/rated' element={<RatedMovie/>}/>
				<Route path='/upcoming' element={<UpComing/>}/>
				<Route path='/tvshow' element={<TvShow/>}/>
			</Routes>
		</div>
        </>
    )
}