/*
 * ============= Question 3 =============
 *
 * The TigersExhibit component below receives 2 props:
 * - population which is a number
 * - habitat which is an array
 *
 * Replace the dots (...) in the paragraph (<p>) elements below with the props.
 *
 * HINT: you can convert an array into a string by calling the .join(',')
 * method.
 */

import React from "react";

function TigersExhibit() {
  return (
    <div className="tigers">
      <h2>Tigers</h2>
      <p>There are ... tigers in the world</p>
      <p>They live in ... habitats</p>
    </div>
  );
}

export default TigersExhibit;
