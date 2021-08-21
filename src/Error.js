import React from 'react';
import { Alert } from 'react-bootstrap'

class Error extends React.Component {
    render() {
        return (
            <Alert variant="danger">
                {this.props.error}
            </Alert>
        )
    }
}


export default Error;