import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import img1 from '../assets/Images/img6.png';
import img2 from '../assets/Images/logro4.PNG';
import img3 from '../assets/Images/logro7.jpg';
import img4 from '../assets/Images/logro9.png';
import img5 from '../assets/Images/logro6.PNG';
import img6 from '../assets/Images/logro5.PNG';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;
    background: #dcdcdc;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 90vh;
    
    box-shadow: 0 0 0 5vw #dcdcdc;
    border: 3px solid ${props => props.theme.body};
    z-index: 11;

    @media (max-width: 70em){
    width: 40vw;
    height: 80vh;
    }
    @media (max-width: 64em){
        width: 50vw;
        box-shadow: 0 0 0 60vw ${props => props.theme.text};
    }
    @media (max-width: 48em){
        width: 60vw;
    }
    @media (max-width: 30em){
        width: 80vw;
        height: 60vh;
    }
`

const Title = styled.h1`
    font-size: 8em;
    font-family: 'Kaushan Script';
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.text};
    color: ${props => props.theme.body};
    position: absolute;
    top: -8rem;
    left: 5%;
    z-index: 11;

    @media (max-width: 64em){
        font-size: ${props => props.theme.fontxxl};
    }
    @media (max-width: 48em){
        font-size: ${props => props.theme.fontxl};
    }
`;

const Container = styled.div`
    position: absolute;
    top: 0%;
    left: 36%;
    transform: translate(-50%, 0);
    background: #dcdcdc;
    width: 25vw;
    height: 250vh;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 3rem;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 64em){
        width: 30vw;
        height: 200vh;
    }
    @media (max-width: 48em){
        width: 40vw;
    }
    @media (max-width: 30em){
        width: 60vw;
    }
    h1{
        width: 5rem;
        margin: 0 2rem;
    }
`;

const Item = styled.div`
    display: flex;
    height: 350px;
    width: 25vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
    img{
        width: 100%;
        height: 100%;
        z-index: 5;
        object-fit: cover;
    }
`;

const Product = ({ img, title = '' }) => {
    return (
        <Item>
            <img src={img} alt={title} />
            <h2>{title}</h2>
        </Item>
    )
}


const NewArrivals = () => {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const ScrollingRef = useRef(null);


    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = ScrollingRef.current;

        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: 'bottom+=100% top-=100%',
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                },
                ease: 'none,'
            })

            // Scroll vertical 
            t1.fromTo(scrollingElement,
                {
                    y:'0',
                },
                {
                    y:'-60%', //Cambiar si es necesario agregar más imagenes, aumenta el scroll dentro del overlay.
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: 'bottom top',
                    scroller: '.App',
                    scrub: true,
                },
                
            })
            ScrollTrigger.refresh();

        }, 1000);

        return () => {
            t1.kill();
            ScrollTrigger.kill();
        };
    }, [])


    return (
        <Section ref={ref} id="new-arrival">
            <Overlay />
            <Title data-scroll data-scroll-speed="-2"
                data-scroll-direction="horizontal"
            >Nuestros Logros</Title>

            <Container ref={ScrollingRef}>
                <Product img={img1} title="+5.000 toneladas fueron Recicladas." />
                <Product img={img2} title="Llegamos a instituciones educativas." />
                <Product img={img3} title="Recolectamos y Conservamos material reciclable." />
                <Product img={img4} title="Colocamos estrategicamente puntos de acopio para recolección." />
                <Product img={img5} title="Transportamos voluntariamente material para su reciclaje." />
                <Product img={img6} title="Nuestro equipo esta muy comprometido con esta causa." />
                <Product img={img5} title="Transportamos voluntariamente material para su reciclaje." />
                <Product img={img6} title="Nuestro equipo esta muy comprometido con esta causa." />
            </Container>

        </Section>
    )
}

export default NewArrivals