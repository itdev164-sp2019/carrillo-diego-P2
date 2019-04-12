import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

const Container = styled(Box)`
    height: 400px;
    width: 800px;
    background: #34e89e;  
    background: -webkit-linear-gradient(to right, #0f3443, #34e89e);  
    background: linear-gradient(to right, #0f3443, #34e89e); 
     display: block;
    margin-left: auto;
    margin-right: auto;
`;


const WeatherForm = (props) => (
            <Container>
                {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
                {props.currentWeather && <p>Weather: {props.currentWeather}</p>}
                {props.description && <p>Condition: {props.description}</p>}
                {props.maxWeather && <p>High: {props.maxWeather}</p>}
                {props.minWeather && <p>Low: {props.minWeather}</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
            </Container>
);
    


export default WeatherForm;