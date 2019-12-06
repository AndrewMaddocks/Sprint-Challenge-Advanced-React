import React from "react";
import axios from "axios";
import WomenComponent from "./WomenComponent";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;
const OutterPlayerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Toggle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1%;
`;
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
        <Title>
          <i style={{ color: "#F08C01" }} className="fas fa-futbol"></i>Womens
          World Cup
          <i style={{ color: "#F08C01" }} className="fas fa-futbol"></i>
        </Title>
        <Toggle>
          <div className="dark-mode__toggle">
            <div
              onClick={this.props.toggleMode}
              className={this.props.darkMode ? "toggle toggled" : "toggle"}
            />
          </div>
        </Toggle>
        <OutterPlayerDiv>
          {this.state.women.map(girl => (
            <WomenComponent key={girl.id} girl={girl} />
          ))}
        </OutterPlayerDiv>
      </div>
    );
  }
}
export default App;
