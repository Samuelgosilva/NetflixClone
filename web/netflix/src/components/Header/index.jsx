import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'


// eslint-disable-next-line react/prop-types
const Header = ({hideMenu}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('@user')))
    }, [])

    const logOut = () => {
        localStorage.clear()
        window.location.reload()
    }

  return (
    <header className="row">
                        <div className="col-2">
                            <img src={logo} />
                        </div>
                        {!hideMenu && <div className="col-8">
                            <ul className="menu_list">
                                <li>
                                    <a href="#">Início</a>
                                </li>
                                <li>
                                    <a href="#">Série</a>
                                </li>
                                <li>
                                    <a href="#">Filmes</a>
                                </li>
                                <li>
                                    <a href="#">Mais Recentes</a>
                                </li>
                                <li>
                                    <a href="#">Minha Lista</a>
                                </li>
                            </ul>
                        </div>}
                        <div className="col-2 text-right">
                            {!hideMenu && <a onClick={logOut} className='text-white'>Olá, {user?.nome}. Sair</a>}
                        </div>
                    </header>
  )
}

export default Header