import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/img2.png';
import img2 from '../assets/Images/img3.png';
import img3 from '../assets/Images/img4.png';
import img4 from '../assets/Images/img5.png';
import img5 from '../assets/Images/logro5.PNG';
import img6 from '../assets/Images/logro7.jpg';
import img7 from '../assets/Images/logro8.PNG';
import img8 from '../assets/Images/img6.png';
import img9 from '../assets/Images/6.PNG';
import img10 from '../assets/Images/3.jpg';

const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script';
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    color: ${props => props.theme.text};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;

    @media (max-width: 64em){
        font-size: ${props => props.theme.fontxxl};
    }
    @media (max-width: 48em){
        font-size: ${props => props.theme.fontxl};
    }
`;

const Left = styled.div`
    width: 35%;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    min-height: 100vh;
    z-index: 5;
    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 64em){
        p {
            font-size: ${props => props.theme.fontmd};
        }
    }
    @media (max-width: 48em){
        width: 40%;
        p {
            font-size: ${props => props.theme.fontsm};
        }   
    }
    @media (max-width: 30em){
        width: 40%;
        p {
            font-size: ${props => props.theme.fontxs};
        }
    }
`;

const Right = styled.div`
    position: absolute;
    left: 35%;
    padding-left: 30%;
    min-height: 100vh;

    background-color: ${props => props.theme.grey};
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1{
        width: 5rem;
        margin: 0 2rem;
    }
`

const Item = styled(motion.div)`
    width: 20rem;
    margin-right: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 400px;
        height: 600px;
        cursor: pointer;
        object-fit: cover;
    }
    h1{
        display: inline-block;
        width: fit-content;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
`

const Product = ({ img, title = '' }) => {
    return (
        <Item
            initial={{ filter: 'grayscale(100%)' }}
            whileInView={{ filter: 'grayscale(0%)' }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 'all' }}
        >
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}


const Gallery = () => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const horizontalRef = useRef(null);
    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = horizontalRef.current;
        let pinWrapWidth = scrollingElement.offsetWidth;

        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    // markers: true,
                    // Marcadores para ver donde se encuentra el gsap de nuestros compoenntes
                },
                height: `${scrollingElement.scrollWidth}px`,
                // x: -pinWrapWidth,
                ease: 'none,'
            })

            // Horizontal
            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    // markers: true,
                    // Marcadores para ver donde se encuentra el gsap de nuestros compoenntes
                },
                x: -pinWrapWidth,
                ease: 'none,'
            })
            ScrollTrigger.refresh();

        }, 1000);

        return () => {
            t1.kill();
            ScrollTrigger.kill();
        };

    }, [])

    return (
        <Section ref={ref} id="shop">
            <Title data-scroll data-scroll-speed="-1">Galería</Title>
            <Left>
                <p>Nuestros voluntarios prensan, recolectan, reciclan y dan el ejemplo de como es que hay
                    que tratar los residuos. Esperemos que más gente se sume a esta gran inicitativa. Porque el Futuro no es reciclable.
                    <br />
                    <br />
                    La recolección y el procesamiento de desechos de papel y cartón, vidrio o plástico supone crear nuevos productos basados en esos mismos materiales. Una nueva oportunidad para la Tierra, a la que se puede proteger si se entienden los beneficios del reciclaje, la manera correcta separar los residuos y los retos a los que se enfrenta esta actividad en los próximos años.</p>
            </Left>
            <Right ref={horizontalRef}>
                <Product img={img1} />
                <Product img={img2} />
                <Product img={img3} />
                <Product img={img4} />
                <Product img={img5} />
                <Product img={img6} />
                <Product img={img7} />
                <Product img={img8} />
                <Product img={img9} />
                <Product img={img10} />
            </Right>
        </Section>
    )
}

export default Gallery