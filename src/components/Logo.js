import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { motion } from 'framer-motion';
import LogoUV from '../assets/Svgs/logoUV.png'

const Container = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 100%;
    color: ${props => props.theme.text};
    z-index: 5;

    a{
        display: flex;
        align-items: flex-end;
    }

    img{
        width: 4rem;
        height: auto;
        overflow: visible;
        margin-right: 1rem;
        stroke-linejoin: round;
        stroke-linecap: round;

        g{
            path{
                stroke: ${props => props.theme.text};
            }
        }
    }

`;

const textVariants = {
    hidden: {
        opacity: 0,
        x: -50,
    },

    visible: {
        opacity: 1,
        x: -5,

        transition: {
            duration: 2,
            delay: 6,
            ease: 'easeInOut'
        }
    },
}

const Text = styled(motion.span)`
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.text};
    padding-bottom: 0.5rem;
`

const Logo = () => {
    return (
        <Container>
            <Link to="/">
                <img src={LogoUV} 
                            initial="hidden"
                            animate="visible"
                alt="union verde"/>
                <Text
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Unión Verde
                </Text>
            </Link>

        </Container>
    )
}

export default Logo;