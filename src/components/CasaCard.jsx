import { React } from 'react';
import { Link } from 'react-router-dom';
import casa from '../../public/casa.jpg'
import { FaRegMap } from "react-icons/fa6";
import { TbBath, TbBed, TbRuler } from "react-icons/tb";


const CasaCard = (props) => {


    return (
        <article className='casacard-container'>
            <div className="casacard">
                <img src={casa} alt="" />
                <h2>Precio medio</h2>
                <div className='localizacion'>
                <FaRegMap size={"2rem"} /> <p className="ccaa">{props.ccaa}</p>
                </div>
                <p className='precio'>{props.prediction}€</p>
                <div className='iconos'>
                    <div>
                        <TbBed size={"2rem"} /> <span>{props.bedrooms}</span>
                    </div>
                    <div>
                        <TbBath size={"2rem"} /><span>{props.restrooms}</span>
                    </div>
                    <div>
                        <TbRuler size={"2rem"} /> <span>{props.surface}m²</span>
                    </div>
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