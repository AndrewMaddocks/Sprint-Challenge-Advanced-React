import React from "react";

const WomenComponent = props => {
  return (
    <div>
      <h1>
        {props.girl.name} is from {props.girl.country}
      </h1>
    </div>
  );
};
export default WomenComponent;
