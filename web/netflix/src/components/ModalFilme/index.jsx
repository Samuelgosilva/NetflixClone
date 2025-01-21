/* eslint-disable react/jsx-key */

import api from '../../services/api'
import { useEffect, useState } from 'react'

import Episodeo from '../Episodeo'


const ModalFilme = () => {

    const [filme, setFilme] = useState({})
    const [episodeos, setEepisodeos] = useState([])

    const selectFilmeListener = () => {
        window.addEventListener('selectFilme', (data) => {
            setFilme(data.detail)
        })
    }

    const getEpisodeos = async (temporada_id) => {
        try {
            const response = await api.get(`/episodeo/temporada/${temporada_id}`)
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }

            setEepisodeos(res.episodeos)
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        selectFilmeListener()
    }, [])

    useEffect(() => {
        if (filme.tipo == 'serie') {
            getEpisodeos(filme?.temporadas[0]?._id)
        }

    }, [filme])
    return (
        <div className="modal fade" id="modal-filme">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-hero" style={{ backgroundImage: `url(${filme.capa})` }}>
                        <img src={filme.logo} />
                        <div className="modal-hero-infos">
                            <button className="btn btn-lg btn-custom-white">
                                <span className="mdi mdi-play"></span> Assistir
                            </button>
                            <a href="" className="btn-custom-round btn btn-lg btn-light rounded-circle">
                                <span className="mdi mdi-play"></span>
                            </a>
                            <a href="" className="btn-custom-round border-white  btn btn-lg rounded-circle opacity-50">
                                <span className="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                                <span className="mdi mdi-thumb-down text-white"></span>
                            </a>

                        </div>
                    </div>
                    <div className="modal-infos">
                        <div className="container">
                            <div className="row">
                                <div className="col-7">
                                    <p className="filme-descricao">
                                    {filme.descricao?.substr(0, 190)}...
                                    </p>
                                </div>
                                <div className="col-5">
                                    <p className="filme-elenco">
                                        Elenco: <text>{filme.elenco?.join(', ')}</text>
                                        <br />
                                        <br />
                                        Gêneros: <text>{filme.generos?.join(', ')}</text>
                                        <br />
                                        <br />
                                        Cenas e Momentos: <text>{filme.cenas_momentos?.join(', ')}</text>
                                    </p>
                                </div>
                            </div>
                            <br />
                            {filme.tipo == 'serie' && <> <div className="row">
                                <div className="col-7">
                                    <h3 className="text-white">Episódeos</h3>
                                </div>
                                <div className="col-5 text-right">
                                    <select onChange={(e) => {
                                        getEpisodeos(e.target.value)
                                    }} className="form-control">
                                        {filme.temporadas?.map((temporada) => (
                                            <option value={temporada._id}>
                                                {temporada.titulo}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                                <br />
                                <div className="row">
                                    <ul id="lista_episodeos">
                                        {episodeos.map((episodeo) => (
                                            <Episodeo episodeo={episodeo} />
                                        ))}

                                    </ul>

                                </div> </>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalFilme