import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logoblanco from '../../public/logoblanco.png'
import { FaXTwitter, FaSquareFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className='logofooter'>
                    <img src={logoblanco} alt="" />
                </div>
                <div className="footercontact">
                    <p className='phone'>+34 123456789</p>
                    <p className="email">info@tasaweb.com</p>
                    <div className="socials">
                        <FaXTwitter size={"1.5rem"} />
                        <FaSquareFacebook size={"1.5rem"} />
                        <FaLinkedin size={"1.5rem"} />
                        <FaSquareInstagram size={"1.5rem"} />
                    </div>
                </div>
            </section>
            <div className='copyright'>
                <p> 2024 TasaWeb&copy;. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;