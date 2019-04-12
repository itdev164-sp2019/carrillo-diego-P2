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
    text-align: center;
`;


const WeatherForm = (props) => (
            <Container>
                {props.city && props.country && <h2>Location: {props.city}, {props.country}</h2>}
                {props.currentWeather && <h2>Weather: {props.currentWeather}</h2>}
                {props.icon} && <h2></h2>
                {props.description && <h2>Condition: {props.description}</h2>}
                {props.maxWeather && <h2>High: {props.maxWeather}</h2>}
                {props.minWeather && <h2>Low: {props.minWeather}</h2>}
                {props.humidity && <h2>Humidity: {props.humidity}</h2>}
            </Container>
);
    


export default WeatherForm;