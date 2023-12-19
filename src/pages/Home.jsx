import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Form from '../components/form/Form.jsx';

const Home = ( ) => {


    return (
        <div className='home-container'>
            <div>
                <h1>Home</h1>
                <Outlet />
                <Form />
            </div>
        </div>
    );
}

export default Home;