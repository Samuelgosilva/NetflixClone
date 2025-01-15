import {BrowserRouter, Routes, Route} from 'react-router-dom'

//COMPONENTS
import Login from  './pages/Login'
import Home from    './pages/Home'

const Rotas = () => {

  const logado = localStorage.getItem('@user') // aqui esta pegando o usuario, se ele ja existir 
  return (
    <BrowserRouter>
        <Routes>
            {!logado && <Route path='/' element={<Login />}/>} {/* se o usuario nao estiver logado, fique na rota login */}
             {logado && <Route path='/' element={<Home/>}/>} {/* se o usuario estiver logado, mude para a rota home */}
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas