import { Outlet } from 'react-router-dom';
import Form from '../components/form/Form.jsx';
import './home.css';

const Home = () => {

    const handleFormSubmit = async (formData) => {
        const response = await fetch(`https://dpf0.pythonanywhere.com/predict?surface=${formData.surface}&bedrooms=${formData.bedrooms}&restrooms=${formData.restrooms}&ascensor=${formData.ascensor}`)
        const data = await response.json();
        window.location.href = `/resultado?surface=${formData.surface}&bedrooms=${formData.bedrooms}&restrooms=${formData.restrooms}&ascensor=${formData.ascensor}&prediction=${data.prediction}`;

    }

    return (
        <div className='home-container'>
            <main className='home-main'>
                <section>
                    <h1 className='titulo-home'>¿Vas a alquilar?<br />¡Descubre cuanto<br>
                    </br> vale tu inmueble!</h1>
                </section>
                <div className='form-container'>
                    <div>
                        <Outlet />
                        <Form onSubmit={handleFormSubmit} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;