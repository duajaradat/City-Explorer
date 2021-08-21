import React from "react";
import { Card, CardGroup } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends React.Component {

    theMovies = (object) => {
        console.log("data from movies", object);
        return (
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {object[0].title}
                        </Card.Title>
                        <Card.Img src={object[0].image_url} />

                        <Card.Text>
                            {object[0].vote_average}
                        </Card.Text>
                        <Card.Text>
                            {object[0].release_on}
                        </Card.Text>
                        <Card.Text>
                            {object[0].overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {object[4].title}
                        </Card.Title>
                        <Card.Img src={object[4].image_url} />
                        <Card.Text>
                            {object[4].vote_average}
                        </Card.Text>
                        <Card.Text>
                            {object[4].release_on}
                        </Card.Text>
                        <Card.Text>
                            {object[4].overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {object[2].title}
                        </Card.Title>
                        <Card.Img src={object[2].image_url} />
                        <Card.Text>
                            {object[2].vote_average}
                        </Card.Text>
                        <Card.Text>
                            {object[2].release_on}
                        </Card.Text>
                        <Card.Text>
                            {object[2].overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        )
    }

    render() {

        return (
            <div>
                {this.theMovies(this.props.info)}
            </div>
        )
    }
}

export default Movies;