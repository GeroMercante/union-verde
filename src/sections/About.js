import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/logro1.PNG';
import img2 from '../assets/Images/1.PNG';
import img3 from '../assets/Images/2.PNG';

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    display: flex;

    margin: 0 auto;

    @media (max-width: 48em){
        width: 90vw;
    }
    @media (max-width: 30em){
        width: 100vw;
    }
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontSB};
    font-family: 'Kaushan Script';
    font-weight: 300;
    color: ${props => props.theme.body};
    text-shadow: 2px 2px 2px ${props => props.theme.text};
    position: absolute;
    top: 1rem;
    left: -6%;
    z-index: 5;

    @media (max-width: 64em){
    font-size: ${props => `calc(${props => props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
    }
    @media (max-width: 48em){
        font-size: ${props => props.theme.fontxxl};
    }
`;

const Left = styled.div`
    width: 40%;
    margin-right: 200px;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 0;
    margin-top: 20%;

    @media (max-width: 64em){
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important; 
        margin: 0 auto;
        
        padding: 2rem;
        font-weight: 600;

        backdrop-filter: blur(2px);
        background-color: ${props => `rgba(${props.theme.textRgba},0.4)`};
        border-radius: 20px;
    }

    @media (max-width: 48em){
        font-size: ${props => props.theme.fontmd};
    }

    @media (max-width: 30em){
        font-size: ${props => props.theme.fontsm};
        width: 70%;
    }
`;

const Right = styled.div`
    width: 50%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    .small-img-1{
        width: 350px;
        height: 220px;
        position: absolute;
        right: -80px;
        bottom: 10%;
        border-radius: 20px;
        object-fit: cover;
    }
    .small-img-2{
        width: 300px;
        height: 300px;
        object-fit: cover;
        position: absolute;
        border-radius: 20px;
        right: 80%;
        bottom: 30%;
    }
    @media (max-width: 30em){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            object-fit: cover;
        }
        .small-img-1{
            width: 30%;
            height: auto;
            left: 5%;
            bottom: 10%;
        }
        .small-img-2{
            width: 30%;
            height: auto;
            left: 60%;
            bottom: 20%;
        }
    }
`

const About = () => {
    return (
        <Section id='fixed-target' className='about'>
            <Title data-scroll data-scroll-speed='-2' data-scroll-direction="horizontal" >
                Sobre Nosotros
            </Title>
            <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
            Grupo de vecinos e instituciones locales y municipales de localidades vecinas que trabaja en modo cooperativo por la mejora del ambiente. 
                <br /><br />
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                <br /><br />
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
                Texto texto texto texto texto texto
            </Left>
            <Right>
                <img src={img1} alt="sobre nosotros"/>
                <img
                data-scroll 
                data-scroll-speed="5"
                src={img2} alt="sobre nosotros" className='small-img-2'/>
                <img
                data-scroll 
                data-scroll-speed="-2"
                src={img3} alt="sobre nosotros" className='small-img-1'/>
            </Right>
        </Section>
    )
}

export default About;