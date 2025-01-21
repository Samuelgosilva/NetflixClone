/* eslint-disable no-unused-vars */
// COMPONENTS
import ModalFilme from "../../components/ModalFilme"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Secao from "../../components/Secao"

import api from '../../services/api'
import { useEffect, useState } from "react"

const Home = () => {

    const [principal, setPrincipal] = useState({})
    const [secoes, setSecoes] = useState([])

    const getHome = async () => {
        try {
            const response = await api.get('/home')
            const res = response.data
            console.log(res)

            if (res.error) {
                alert(res.message)
                return false
            }
            setPrincipal(res.principal)
            setSecoes(res.secoes)

        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        getHome()
        
    }, [])

    return (
        <>
            <ModalFilme />
            <div className="container-fluid">
                <Header />
            </div>
            <Hero filme={principal} />

            <div id="main-content">
                {secoes.map((secao, i) => (
                    <Secao secao={secao} key={i} />
                ))}
            </div>
        </>

    )
}

export default Home