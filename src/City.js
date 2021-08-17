
import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCity: "",
            cityData: {},
            imgData: "",
            displayData: false,
            displayMap: false,
        };
    }

    getLocation = async (e) => {
        e.preventDefault();
        let dataRequest = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchCity}&format=json`
        let locationData = await axios.get(dataRequest);
        this.setState({
            cityData: locationData.data[0],
            displayData: true,
        })
        this.getMap();
        console.log("dua", this.state.cityData)
    }
    getMap = async () => {
        let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom={18}`
        let sourceData = await axios.get(mapUrl);
        this.setState({
            imgData: sourceData.config.url,
            displayMap: true,
        });
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            searchCity: e.target.value,

        })
    }
    render() {
        return (
            <div>
                <Form className="form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control onChange={this.handleInput} size="lg" type="text" placeholder="Enter City" />
                        <Button className="button" onClick={this.getLocation} variant="primary" type="submit">
                            Explore!
                        </Button>
                    </Form.Group>
                </Form >
                <Card className="card" style={{ width: "18rem" }}>
                    {this.state.displayMap ? <Card.Img src={this.state.imgData} /> : ""}
                    {this.state.displayData ? <Card.Header>{this.state.cityData.display_name}</Card.Header> : ""}

                    {this.state.displayData ? <Card.Body> Latitude : {this.state.cityData.lat} <br /> Longitude : {this.state.cityData.lon} </Card.Body> : ""}
                </Card>
            </div>
        );
    }
};


export default City;
