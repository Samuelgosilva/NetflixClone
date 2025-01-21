/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//import logoDiabo from '../../assets/logoDiabo.png'
import top10 from '../../assets/top10.png'


const Hero = ({ filme }) => {
  return (
    <div id="hero" className="container-fluid" style={{
       backgroundImage: `url(${filme.capa})`
    }}>
                    <div className="container">
                        <div className="row" id="hero_infos">
                            <div className="col-6">
                                <img className="logo" src={filme.logo}/>
                                <h1 className="text-white">
                                    <img src={top10} />Top 1 de hoje no Brasil.
                                </h1>
                                <p className="text-white">{filme.descricao?.substr(0, 190)}...                                 
                                </p>
    
                                <br />
    
                                <button className="btn btn-lg btn-custom-white">
                                    <span className="mdi mdi-play"></span> Assistir
                                </button>
                                <button className="btn btn-lg btn-custom-translucent">
                                    <span className="mdi mdi-information-outline"></span> Mais informações
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
  )

}



export default Hero