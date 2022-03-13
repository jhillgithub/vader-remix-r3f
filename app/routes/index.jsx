import React from 'react';
import { Link } from "remix";

function Overlay() {
  return (
    <div id="overlay">
		<button id="startButton">Enter</button>
	</div>

  )
}

export default function Index() {
  return (
    <>
      <Link to="/vader">
        <Overlay />
      </Link>
    </>
  )
}