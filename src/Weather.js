import React from "react";
import { Card, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";



class Weather extends React.Component {

    render() {

        const Days = this.props.info.days



        return (
            <>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Date : {Days[0].datetime}</Card.Title>
                                <Card.Text>
                                    {Days[0].description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Date : {Days[1].datetime}</Card.Title>
                                <Card.Text>
                                    Description : {Days[1].description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Date : {Days[2].datetime}</Card.Title>
                                <Card.Text>
                                    Description : {Days[2].description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </>
        )
    }
}

export default Weather;