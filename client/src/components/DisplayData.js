import React from "react";
import axios from "axios";
import WomenComponent from "./WomenComponent";

class App extends React.Component {
  state = {
    women: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({ women: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Womens World Cup</h1>
        <div>
          {this.state.women.map(girl => (
            <WomenComponent key={girl.id} girl={girl} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
