import React from 'react'

const HomePages = () => {
  return (
    <div className='mt-4'>
        <h1>Listado de Pokemons</h1>
        <hr />
        
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot></tfoot>
        </table>
    </div>
  )
}

export default HomePages