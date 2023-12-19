import React  from 'react';
import { Link, Outlet } from 'react-router-dom';
import './form.css';


const Form = () => {
    return (
        <div>
            <form className='landing-form'>
            <select name="tipo" id="tipo" form="tipo-form" className='form-inputs'>
              <option value="" disabled selected>Tipo</option>
              <option value="àtico">Ático</option>
              <option value="chalet">Chalet</option>
              <option value="apartamento">Apartamento</option>
            </select>
            <input type='number' placeholder='Metros Cuadrados' className='form-inputs' value="metros"  />
            <input type="number" placeholder="Habitaciones" className='form-inputs' value="habtaciones" />
            <input type="number"  placeholder="Baños" className='form-inputs' value="baños" />
            <label for="parking" className='label-form'>Parking</label>
            <input type="checkbox" id="parking" name="parking" value="parking" className='form-inputs' />
            <label for="balcon" className='label-form'>Balcón</label>
            <input type="checkbox" id="balcon" name="balcon" value="balcon" className='form-inputs' />
            <input type="number"  placeholder="Nº de Planta" className='form-inputs' value="planta" />
            <label for="parking" className='label-form'>Ascensor</label>
            <input type="checkbox" id="ascensor" name="ascensor" value="ascensor" className='form-inputs' />
            <label for="parking" className='label-form'>Terraza</label>
            <input type="checkbox" id="terraza" name="terraza" value="terraza" className='form-inputs' />
            <button type="submit" className='landing-submit'>Submit</button>
          </form>
        </div>
    );
}




export default Form;