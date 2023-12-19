import { React } from 'react';
import { Link } from 'react-router-dom';
import casa from '../assets/casa.jpg'
import { FaRegMap } from "react-icons/fa6";



const CasaCard = (props) => {


    return (
        <article className='casacard-container'>
            <div className="casacard">
                <img src={casa} alt="" />
                <h2 className='casacard-h2'>Precio medio</h2>
                <p><FaRegMap />Donostia San Sebastián, Gipúzcoa</p>
                <p className='precio'>{props.prediction}€</p>
                <div className='iconos'>
                    <span>iconos</span>
                </div>
                <p className='fechas'>Últimos 3 meses</p>
                <div className='nuevabusqueda'>
                    <Link to={"/"}>Nueva búsqueda</Link>
                </div>
            </div>
        </article>
    );
};

export default CasaCard;