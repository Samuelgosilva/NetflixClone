// IMAGENS
import img1 from '../../assets/R.png'
import Header from '../../components/Header'

const Login = () => {
    return (
<div className="container-fluid bg_filmes"
     style={{
        position: 'fixed',
        height: '100%',
     }}
>
        <Header />
        <div id="caixa_login" className="col-4 offset-4">
            <h1 className="text-white">Entrar</h1>
            <br />
            <form>
                <input type="email" className="form-control form-control-lg" placeholder="Email ou número de telefone" />
                <br />
                <input type="password" className="form-control form-control-lg" placeholder="Senha" />
                <br />
                <button className="btn btn-lg btn-block btn-danger">Entrar</button>
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

            </form>
        </div>
    </div>

    )
}

export default Login