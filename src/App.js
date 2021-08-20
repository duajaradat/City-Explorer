
import React from "react";
import City from "./City";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Weather Forecast App</h2>
        <City form="data"/>
      </div>
      
    );
  }
}

export default App;
