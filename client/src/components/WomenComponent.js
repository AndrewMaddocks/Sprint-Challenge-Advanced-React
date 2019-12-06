import React from "react";
import styled from "styled-components";

const PlayerDiv = styled.div`
  border: 2px solid #23207c;
  width: 20%;
  margin-bottom: 2%;
`;

const WomenComponent = props => {
  return (
    <PlayerDiv>
      <h1> {props.girl.name}</h1>
      <h3> From {props.girl.country}</h3>
    </PlayerDiv>
  );
};
export default WomenComponent;
