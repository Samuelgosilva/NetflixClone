import Filme from "../../components/Filme"
import { useEffect, useState } from "react"


const Home = () => {
    // LÓGICA DO COMPONENTE
    const [filmes, setFilmes] = useState([])
    const [filme, setFilme] = useState({
        nome: '',
        ano: 0,
        categoria: null
    })

    const cadastrar = () => {
        setFilmes([filme, ...filmes])
    }

    useEffect(() =>{
       // alert('Filmes foram atualizados') // toda vez que a state 'filmes' for alterado, o useEffect vai disparar um alert nos avisando
    }, [filmes])

    // COMPONENTE FOR CARREGADO
    useEffect(() => {
        console.log('Componente carregou')
    },[]) // Para avisar que o componente carregou, basta deixar o Array vazio. 

    // RETORNA O |HTML DO COMPONENTE
    return (
        <div className="container">
            <h1>Lista Filmes</h1>
            <br />
            <div className="jumbotron">
                <div className="row">
                    <div className="col-4">
                        <label>Nome</label>
                        <input type="text" className="form-control" 
                        placeholder="Nome do Filme" 
                        onChange={(e) => {
                            setFilme({
                                ...filme,
                                nome: e.target.value
                            })
                        }}/>
                    </div>
                    <div className="col-4">
                        <label>Categoria</label>
                        <select className="form-control" onChange={(e) => {
                            setFilme({
                                ...filme,
                                categoria: e.target.value
                            })
                        }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label>Ano</label>
                        <input type="number" className="form-control" placeholder="Ano do Filme" onChange={(e) => {
                            setFilme({
                                ...filme,
                                ano: e.target.value
                            })
                        }}/>
                    </div>
                    
                </div>
                <br />
                    <button onClick={cadastrar} className="btn btn-success btn-lg btn-block" >Cadastrar</button>
            </div>
            <br />
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map((filme) =>(
                        
                        <Filme filme={filme} key={filme.id}/>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Home