import CasaCard from '../components/CasaCard';
import { useNavigate, Link } from 'react-router-dom';
import './tasacion.css';
import { IoSearchOutline } from "react-icons/io5";


const Tasacion = () => {

    const navigate = useNavigate();

    const queryParameters = new URLSearchParams(window.location.search)
    const surface = queryParameters.get("surface")
    const bedrooms = queryParameters.get("bedrooms")
    const restrooms = queryParameters.get("restrooms")
    const ascensor = queryParameters.get("ascensor")
    const prediction = queryParameters.get("prediction")

    const handleNuevaBusqueda = () => {
        navigate('/');
    };
    const ccaa = queryParameters.get("ccaa")
    

    return (

        <main >
            <div className="header_resultado">
                <p className='p-header_resultado'>¿Vas a alquilar?<br />¡Descubre cuanto<br></br> vale tu inmueble!</p>
                <div className='button-div'>
                <Link to={'/'} className='button-header_resultado'><IoSearchOutline className="back-icon-tasacion" />Nueva Búsqueda</Link>
                </div>
            </div>
            <div className='resultado_content'>
                <div className="resultado_title">
                    <h1 className='resultado-h1'>¿Cuánto vale?</h1>
                    <p className='p-tasacion'>Cuánto vale tu inmueble según tu tipo de vivienda</p>
                </div>
                <CasaCard surface={surface} bedrooms={bedrooms} restrooms={restrooms} ascensor={ascensor} ccaa={ccaa} prediction={prediction} />
            </div>
        </main>

    );
}

export default Tasacion;