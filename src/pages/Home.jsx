import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Form from '../components/form/Form.jsx';
import './home.css';

const Home = () => {


    return (
        <div className='home-container'>
            <main className='home-main'>
                <section>
                    <h1 className='titulo-home'>¿Vas a alquilar?<br />¡Descubre cuanto<br>
                    </br> vale tu inmueble!</h1>
                </section>
                <div className='home-container'>
                    <div>
                        <Outlet />
                        <Form />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;