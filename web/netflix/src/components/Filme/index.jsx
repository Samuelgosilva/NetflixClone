/* eslint-disable react/prop-types */


const Filme = ({filme}) => {

    const mostrarNome = () => {
        alert(filme.nome)
    }
  return (
    <tr>
      <td>{filme.nome}</td>
      <td>{filme.categoria}</td>
      <td>{filme.ano}</td>
      <td className="text-right">
        <button className="btn btn-info" onClick={mostrarNome}> informações</button>{' '}
        <button className="btn btn-danger"> Excluir</button>
      </td>
    </tr>
  )
}



export default Filme