import CasaCard from '../components/CasaCard';
import './tasacion.css';


const Tasacion = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const surface = queryParameters.get("surface")
    const bedrooms = queryParameters.get("bedrooms")
    const restrooms = queryParameters.get("restrooms")
    const ascensor = queryParameters.get("ascensor")
    const prediction = queryParameters.get("prediction")
    

    return (

        <main >
            <div className="header_resultado">
                <p className='p-header_resultado'>¿Vas a alquilar?<br />¡Descubre cuanto<br></br> vale tu inmueble!</p>
            </div>
            <div className='resultado_content'>
                <div className="resultado_title">
                    <h1>¿Cuánto vale?</h1>
                    <p>Cuánto vale tu inmueble según tu tipo de vivienda</p>
                </div>
                <CasaCard surface={surface} bedrooms={bedrooms} restrooms={restrooms} ascensor={ascensor} prediction={prediction} />
            </div>
        </main>

    );
}

export default Tasacion;