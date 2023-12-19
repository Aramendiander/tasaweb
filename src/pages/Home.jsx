import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Form from '../components/form/Form.jsx';

const Home = () => {


    return (
        <div>
            <main className='home-main'>
                <section>
                    <h1>¿Vas a alquilar?<br />¡Descubre cuanto vale tu inmueble!</h1>
                </section>
                <button className="test">Descubre cuanto vale tu inmueble</button>
                <div className='home-container'>
                    <div>
                        <h1>Home</h1>
                        <Outlet />
                        <Form />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;