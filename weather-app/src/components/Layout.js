import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

const Display = styled(Flex)`
    background: #373B44; 
    background: -webkit-linear-gradient(to right, #4286f4, #373B44);  
    background: linear-gradient(to right, #4286f4, #373B44); 
`;


const H1 = styled.h1`
    margin-left: 5%;
    font-family: ;
    color: black;
`;

const Image = styled.image`
    background: url('https://res.cloudinary.com/diegocarr51/image/upload/c_scale,w_150/v1554944265/category_weather_500x500.png');
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0px;
    right: 0px;
`;



const Layout = props => (
        <Display>
            <H1>{props.title}</H1>
            <Image />
        </Display>     
);

export default Layout;
  