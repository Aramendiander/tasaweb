import React, { useState } from 'react';
import './form.css';
import { IoSearchOutline } from "react-icons/io5";

const Form = (props) => {
  const [formState, setFormState] = useState({
    tipo: '',
    ccaa: '',
    surface: '',
    bedrooms: '',
    restrooms: '',
    parking: false,
    balcon: false,
    planta: '',
    ascensor: 0,
    terraza: false
  });

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    if (value === true) {
      setFormState({
        ...formState,
        [event.target.name]: 1
      });
      return;
    }
    setFormState({
      ...formState,
      [event.target.name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    for (let field in formState) {
      if (field === 'parking' || field === 'balcon' || field === 'ascensor' || field === 'terraza') {
        continue;
      }
      if (!formState[field]) {
        alert('Por favor, rellena todos los campos');
        return;
      }
    }
  
    props.onSubmit(formState);
  };

  return (
    <div>
    <form className='landing-form' onSubmit={handleSubmit}>
      <select name="tipo" id="tipo" form="tipo-form" className='form-inputs' value={formState.tipo} onChange={handleChange} required>
        <option value="" disabled>Tipo</option>
        <option value="àtico">Ático</option>
        <option value="chalet">Chalet</option>
        <option value="apartamento">Apartamento</option>
      </select>
      <select name="ccaa" id="ccaa" form="ccaa-form" className='form-inputs' value={formState.ccaa} onChange={handleChange} required>
        <option value="" disabled>CCAA</option>
        <option value="andalucia">Andalucía</option>
        <option value="aragon">Aragón</option>
        <option value="asturias">Asturias</option>
        <option value="cantabria">Cantabria</option>
        <option value="castilla y leon">Castilla y León</option>
        <option value="castilla la mancha">Castilla La Mancha</option>
        <option value="catalunya">Catalunya</option>
        <option value="comunitat valencia">Comunitat Valenciana</option>
        <option value="euskal herria">Euskal Herria</option>
        <option value="extremadura">Extremadura</option>
        <option value="galicia">Galicia</option>
        <option value="islas canarias">Islas Canarias</option>
        <option value="islas baleares">Islas Baleares</option>
        <option value="la rioja">La Rioja</option>
        <option value="madrid">Madrid</option>
        <option value="murcia">Murcia</option>
        <option value="navarra">Navarra</option>
      </select>
      <input type='number' placeholder='Metros Cuadrados' className='form-inputs' name="surface" value={formState.surface} onChange={handleChange} required />
      <input type="number" placeholder="Habitaciones" className='form-inputs' name="bedrooms" value={formState.bedrooms} onChange={handleChange} required />
      <input type="number" placeholder="Baños" className='form-inputs' name="restrooms" value={formState.restrooms} onChange={handleChange} required />
      <div className='checkbox-div'>
        <label htmlFor="parking" className='label-form'>Parking</label>
        <input type="checkbox" id="parking" name="parking" className='form-inputs' checked={formState.parking} onChange={handleChange} />
      </div>
      <div className='checkbox-div'>
        <label htmlFor="balcon" className='label-form'>Balcón</label>
        <input type="checkbox" id="balcon" name="balcon" className='form-inputs' checked={formState.balcon} onChange={handleChange} />
      </div>
      <input type="number" placeholder="Nº de Planta" className='form-inputs' name="planta" value={formState.planta} onChange={handleChange} required />
      <div className='checkbox-div'>
        <label htmlFor="ascensor" className='label-form'>Ascensor</label>
        <input type="checkbox" id="ascensor" name="ascensor" className='form-inputs' checked={formState.ascensor} onChange={handleChange} />
      </div>
      <div className='checkbox-div'>
        <label htmlFor="terraza" className='label-form'>Terraza</label>
        <input type="checkbox" id="terraza" name="terraza" className='form-inputs' checked={formState.terraza} onChange={handleChange} />
      </div>
      <button type="submit" className='form-submit' >Descubre<IoSearchOutline className="back-icon" /></button>
    </form>
  </div>
  );
}

export default Form;