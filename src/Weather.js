import React from "react";
import { Card, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";



class Weather extends React.Component {

    render() {

        const Days = this.props.info.days



        return (
            <>
                <Row>

                    <Card border="primary" style={{ width: '18rem' }} className="card">
                        <Card.Header>DAY ONE</Card.Header>
                        <Card.Body>
                            <Card.Title>Date : {Days[0].datetime}</Card.Title>
                            <Card.Text>
                                {Days[0].description}
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }} className="card">
                        <Card.Header>DAY TWO</Card.Header>
                        <Card.Body>
                            <Card.Title>Date : {Days[1].datetime}</Card.Title>
                            <Card.Text>
                                Description : {Days[1].description}
                            </Card.Text>

                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }} className="card">
                        <Card.Header>DAY THREE</Card.Header>
                        <Card.Body>
                            <Card.Title>Date : {Days[2].datetime}</Card.Title>
                            <Card.Text>
                                Description : {Days[2].description}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Row>

            </>
        )
    }
}

export default Weather;