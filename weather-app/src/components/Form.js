import React from 'react';
import Button from './Button'
import './Form.css'


class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getForecast}>
                <input className="Layout" type="text" name="city" placeholder={"City"} />
                <input className="Layout" type="text" name="country" placeholder="Country" />
                <Button>Get Forecast!</Button>
            </form>
        )
    }
}

export default Form;