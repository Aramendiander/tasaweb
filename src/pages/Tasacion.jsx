import { useEffect, useState } from 'react';
import CasaCard from '../components/CasaCard';


const Tasacion = () => {


    return (

        <main >
            <div className="header_resultado">
                <p>¿Vas a alquilar?<br />¡Descubre cuanto vale tu inmueble!</p>
            </div>
            <div className='resultado_content'>
                <div className="resultado_title">
                    <h1>¿Cuánto vale?</h1>
                    <p>Cuánto vale tu inmueble según tu tipo de vivienda</p>
                </div>
                <CasaCard />
            </div>
        </main>

    );
}

export default Tasacion;