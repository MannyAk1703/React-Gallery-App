import React from "react";

//Renders a list item where photos are to be contained

function Photo(props) {
  return (
    <li>
      <img src={props.url} alt="" />
      <img />
    </li>
  );
}

export default Photo;
