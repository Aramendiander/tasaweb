import { React } from 'react';
import { Link } from 'react-router-dom';
import casa from '../../public/casa.jpg'
import { FaRegMap } from "react-icons/fa6";



const CasaCard = (...valores) => {
    return (
        <article className='casacard-container'>
            <div className="casacard">
                <img src={casa} alt="" />
                <h2>Precio medio</h2>
                <p><FaRegMap />Donostia San Sebastián, Gipúzcoa</p>
                <p className='precio'>€6000,00</p>
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