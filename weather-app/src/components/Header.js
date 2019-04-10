import React from 'react';
import styled from 'styled-components';
import { Flex, Link, Image} from 'rebass';

const Display = styled(Flex)`
    background: #67B26F;
    background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  
    background: linear-gradient(to right, #4ca2cd, #67B26F); 

`;

const H1 = styled.h1`
    margin-left: 5%;
    font-family: Roboto;
    color: white;
`;

const Header = props => (
    <Link href='/'>
        <Display>
            <H1>{props.title}</H1>
            <Image></Image>
        </Display>
    </Link>
);

export default Header;
