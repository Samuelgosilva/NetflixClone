
import logo from '../../assets/logo.png'


const Header = () => {
  return (
    <header className="row">
                        <div className="col-2">
                            <img src={logo} />
                        </div>
                        <div className="col-8">
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
                        </div>
                    </header>
  )
}

export default Header