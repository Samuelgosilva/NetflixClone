import { useState } from 'react'

// IMAGENS
import img1 from '../../assets/R.png'
import Header from '../../components/Header'


import api from '../../services/api'

const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
    })

    const handleLogin = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais)
            const res = response.data

            if(res.error){
                alert(res.message)
                return false
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario)) // guardando os dados do usuario no browser
            window.location.reload() // dando reload na pagina
        } catch (err) {
           alert(err.message) 
        }
    }

    return (
<div className="container-fluid bg_filmes"
     style={{
        position: 'fixed',
        height: '100%',
     }}
>
        <Header hideMenu/>
        <div id="caixa_login" className="col-4 offset-4">
            <h1 className="text-white">Entrar</h1>
            <br />
            <>
                <input type="email" 
                className="form-control form-control-lg" 
                onChange={(e) => setCredenciais({
                    ...credenciais,
                    email: e.target.value
                })} 
                placeholder="Email ou número de telefone" />
                <br />
                <input type="password" 
                className="form-control form-control-lg" 
                placeholder="Senha" 
                onChange={(e) => setCredenciais({
                    ...credenciais,
                    senha: e.target.value
                })}
                />
                <br />
                <button className="btn btn-lg btn-block btn-danger" onClick={handleLogin}>Entrar</button>
                <div className="row mt-4">
                    <div className="col text-muted">
                        <input type="checkbox" /> Lembrar de mim.
                    </div>
                    <div className="col text-right">
                        <a href="#" className="text-muted">Precisa de ajuda?</a>
                    </div>
                </div>
                <div className="row mt-4 icone">
                    <div className="col">
                        <img src={img1} alt="icon" />
                        <a href="#" className="text-muted">Conectar com Facebook</a>
                    </div>
                </div>
                <div className="row mt-4 ">
                    <div className="col">
                        <span>Novo por aqui?</span>
                        <a href="#" className="text-white"> Assine Agora</a>
                    </div>
                </div>
                <div className="row mt-4 ">
                    <div className="col">
                        Está página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                        <a href="#">Saiba mais...</a>
                    </div>
                </div>

            </>
        </div>
    </div>

    )
}

export default Login