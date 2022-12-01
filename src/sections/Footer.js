import { motion } from 'framer-motion';
import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/Svgs/star_white_48dp.svg';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    position: relative;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 15vw;
        height: auto;
    }
    h3{
        font-size: ${props => props.theme.fontxl};
        font-family: 'Kaushan Script';
    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.font};
    }
`;

const FooterComponent = styled(motion.footer)`
    width: 80vw;

    ul{
        list-style-type: style none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 2rem;
        margin-top: 4rem;
        padding: 0 1rem;
        border-top: 1px solid ${props => props.theme.text};
        border-bottom: 1px solid ${props => props.theme.text};

        @media (max-width: 48em) {
            justify-content: center;
        }
    }

    li{
        list-style: none;
        padding: 2rem;
        font-size: ${props => props.theme.fontlg};
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover{
            transform: scale(1.1);
        }

        @media (max-width: 48em) {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: ${props => props.theme.fontmd};
        }
        
    }

`;

const Bottom = styled.div`
    padding: 0.5rem 0;
    margin: 0 4rem;
    font-size: ${props => props.theme.fontlg};

    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: underline;
    }

    

    @media (max-width: 64em) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            span{
                transform: none !important;
            }
        }

        @media (max-width: 48em) {
            font-size: ${props => props.theme.fontmd};
        }
`;


const Footer = () => {
    
    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);

        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0.0, 0.35, 1.0]
            })
    }

    return (
        <Section>
            <LogoContainer>
                <img src={logo}  alt='logo' />
            </LogoContainer>
            <FooterComponent
            initial={{y:'-400px'}}
            whileInView={{y:0}}
            viewport={{once:false}}
            transition={{duration:1.5}}
            >
                <ul>
                    <li onClick={() => handleScroll('#home')}>Inicio</li>
                    <li onClick={() => handleScroll('.about')}>Sobre Nosotros</li>
                    <li onClick={() => handleScroll('#shop')}>Galería</li>
                    <li onClick={() => handleScroll('#new-arrival')}>Nuestros Logros</li>
                    <li>
                        <a href='https://www.instagram.com/union__verde/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/union.verde1' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                    </li>
                </ul>
                <Bottom>
                    <span>&copy; {new Date().getFullYear()}. Todos los Derechos Reservados.</span>
                    <span>Hecho con el &hearts; by {''} 
                    <a href='https://geromedev.ar' target='_blank' rel='noreferrer'>
                        {' '}GeroMercante Desarrollo
                    </a>
                    {' '}-{' '}
                    <a href='https://' target='_blank' rel='noreferrer'>
                        {' '}JuliánTineo Diseño
                    </a> 
                    </span>
                </Bottom>
            </FooterComponent>
        </Section>
    )
}

export default Footer