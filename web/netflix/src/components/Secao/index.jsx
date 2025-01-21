/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Filme from "../Filme"


const Secao = ({secao}) => {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-white">{secao[0]?.generos[0]}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <ul className="filme_lista">
                    {secao.map((filme) => (
                        <Filme filme={filme}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Secao