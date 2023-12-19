import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './form.css';
import { IoSearchOutline } from "react-icons/io5";

const Form = (props) => {
  const [formState, setFormState] = useState({
    tipo: '',
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
    props.onSubmit(formState);
  };

  return (
    <div>
      <form className='landing-form' onSubmit={handleSubmit}>
        <select name="tipo" id="tipo" form="tipo-form" className='form-inputs' value={formState.tipo} onChange={handleChange}>
          <option value="" disabled>Tipo</option>
          <option value="àtico">Ático</option>
          <option value="chalet">Chalet</option>
          <option value="apartamento">Apartamento</option>
        </select>
        <input type='number' placeholder='Metros Cuadrados' className='form-inputs' name="surface" value={formState.surface} onChange={handleChange} />
        <input type="number" placeholder="Habitaciones" className='form-inputs' name="bedrooms" value={formState.bedrooms} onChange={handleChange} />
        <input type="number" placeholder="Baños" className='form-inputs' name="restrooms" value={formState.restrooms} onChange={handleChange} />
        <div className='checkbox-div'>
          <label htmlFor="parking" className='label-form'>Parking</label>
          <input type="checkbox" id="parking" name="parking" className='form-inputs' checked={formState.parking} onChange={handleChange} />
        </div>
        <div className='checkbox-div'>
          <label htmlFor="balcon" className='label-form'>Balcón</label>
          <input type="checkbox" id="balcon" name="balcon" className='form-inputs' checked={formState.balcon} onChange={handleChange} />
        </div>
        <input type="number" placeholder="Nº de Planta" className='form-inputs' name="planta" value={formState.planta} onChange={handleChange} />
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