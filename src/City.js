
import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Movies from "./Movies";


class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCity: "",
            cityData: {},
            imgData: "",
            displayData: false,
            displayMap: false,
            forecastData: null,
            displayforecast: false,
            movieData: null,
            displayMovie: false,
            errorMsg: false,
            show: false,
        };
    }

    getLocation = async (e) => {
        e.preventDefault();
        let dataRequest = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchCity}&format=json`;
        console.log(dataRequest);
        try {
            let locationData = await axios.get(dataRequest);
            this.setState({
                cityData: locationData.data[0],
                displayData: true,
            })

        } catch (error) {
            console.log("getLocation");
            this.setState({
                errorMsg: true,
                displayData: false,
                displayMap: false,
                cityData: {},

            });
        }
        this.getMap();
        this.forecast();
        this.getMovie();

    };

    getMap = async () => {
        let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom={18}`;
        console.log(mapUrl);
        let sourceData = await axios.get(mapUrl);
        this.setState({
            imgData: sourceData.config.url,
            displayMap: true,
            errorMsg: false,
        });
    }

    forecast = async () => {
        try {
            let weatherUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}&searchQuery=${this.state.searchCity}`;
            let weatherRequest = await axios.get(weatherUrl);

            this.setState({
                forecastData: weatherRequest.data[0],
                displayforecast: true,
            }, () => { console.log(this.state.forecastData) })

        } catch {
            this.setState({
                displayforecast: false,
            })
            // }, () => { this.getMovie() })
        }
    }

    getMovie = async () => {
        try {
            let movieUrl = `${process.env.REACT_APP_SERVER_LINK}/movies?searchQuery=${this.state.searchCity}`;
            let moviesRequest = await axios.get(movieUrl);
            console.log(moviesRequest);
            this.setState({
                movieData: moviesRequest.data,
                displayMovie: true,
            }, () => { console.log(this.state.movieData) })

        } catch {
            this.setState({
                displayMovie: false,

            })

        }
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            searchCity: e.target.value,
        });
    };

    render() {
        return (
            <>
                <Form className="form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            onChange={this.handleInput}
                            size="lg"
                            type="text"
                            placeholder="Enter City"
                        />
                        <Button
                            className="button"
                            onClick={this.getLocation}
                            variant="primary"
                            type="submit"
                        >
                            Explore!
                        </Button>
                    </Form.Group>
                </Form>
                <Card className="card" style={{ width: "18rem" }}>
                    {this.state.displayMap ? <Card.Img src={this.state.imgData} /> : ""}
                    {this.state.displayData ? (
                        <Card.Header>{this.state.cityData.display_name}</Card.Header>
                    ) : (
                        ""
                    )}
                    {this.state.displayData ? (
                        <Card.Body>
                            {" "}
                            Latitude : {this.state.cityData.lat} <br /> Longitude :{" "}
                            {this.state.cityData.lon}{" "}
                        </Card.Body>
                    ) : (
                        ""
                    )}
                </Card>

                {this.state.displayforecast ? <Card>
                    <Card.Header>WEATHER</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {this.state.forecastData ? <Weather info={this.state.forecastData} /> : ""}
                        </Card.Text>
                    </Card.Body>
                </Card> : ""}


                {this.state.displayMovie ? <Card>
                    <Card.Header>MOVIES</Card.Header>
                    <Card.Body>
                        <Card.Title>Movies here</Card.Title>
                        <Card.Text>
                            {this.state.movieData ? <Movies info={this.state.movieData} /> : ""}
                        </Card.Text>
                    </Card.Body>
                </Card> : ""}

                {this.state.errorMsg ? (
                    <Alert variant="danger" dismissible >
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            Data does not exists.
                        </p>
                    </Alert>
                ) : (
                    ""
                )}
            </>
        );
    }
}





export default City;
