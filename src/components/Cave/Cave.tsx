import { useState } from 'react'
import './Cave.css'
import { Element } from 'react-scroll'

function Cave() {
  return (
    <Element name="cave">
      <div className="CaveContainer">
        <p>Cave Container</p>
      </div>
    </Element>
  );
}

export default Cave