/*
 * ============= Question 4 =============
 *
 * Convert the MonkeysExhibit component below to a class component.
 */

import React, { Component } from "react";

class MonkeysExhibit extends Component {
  render(){
  return( 
    <section className="monkeys">
      <h2>Latin name: {props.latinName}</h2>
      <ul>
        {props.commonSpecies.map((speciesName, index) => {
          return <li key={index}>{speciesName}</li>;
        })}
      </ul>
    </section>
  );
}
}

export default MonkeysExhibit;
