import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import { colors, values, gryffMascot } from "./houses/Gryffindor";

console.log(colors);
// => 'Scarlet and Gold'

// gryffMascot();
// => 'The Lion'

// values();
// => Attempted import error

function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <Hufflepuff />
      {values()}
      {gryffMascot()}

    </div>
  );
}

export default Hogwarts
