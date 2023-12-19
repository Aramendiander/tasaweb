import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Form from '../components/form/Form.jsx';

const Home = () => {

    const handleFormSubmit = async (formData) => {
        // handle form submission here
        console.log(formData);
        console.log(formData.surface)
        console.log(formData.bedrooms)
        console.log(formData.restrooms)
        console.log(formData.ascensor)
        const response = await fetch(`https://dpf0.pythonanywhere.com/predict?surface=${formData.surface}&bedrooms=${formData.bedrooms}&restrooms=${formData.restrooms}&ascensor=${formData.ascensor}`)
        const data = await response.json();
        console.log(data)
    }

    return (
        <div>
            <main className='home-main'>
                <section>
                    <h1>¿Vas a alquilar?<br />¡Descubre cuanto vale tu inmueble!</h1>
                </section>
                <div className='home-container'>
                    <div>
                        <h1>Home</h1>
                        <Outlet />
                        <Form onSubmit={handleFormSubmit} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;