import {useState,useEffect} from 'react'

const Filtros = ({filtros,setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className='campo'>
                <label htmlFor="">Filtrar Gastos</label>
                <select
                    value={filtros}
                    onChange={e=>setFiltro(e.target.value)}
                >
                    <option value=""> --Todas las Categorias-- </option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="sucripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros