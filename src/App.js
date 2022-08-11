import './App.scss';
import { useAuth } from './hook/useAuth';
import { Login } from './pages/Login';
import { Private } from './pages/Private';


function App() {
  const {token} = useAuth()
  if(token){
    return <Private/>;
  }
  return <Login/>
}


 

export default App;
