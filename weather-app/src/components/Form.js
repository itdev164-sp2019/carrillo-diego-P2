import React from 'react';
import Button from './Button'


class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <Button>Get Forecast!</Button>
            </form>
        )
    }
}

export default Form;