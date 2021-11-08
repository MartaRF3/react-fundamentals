// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for
// the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
let styles1 = {
  fontStyle: 'italic',
  backgroundColor: 'lightblue'
}
let styles2 = {
  fontStyle: 'italic',
  backgroundColor: 'pink'
}
let styles3 = {
  fontStyle: 'italic',
  backgroundColor: 'orange'
}

const smallBox = <div className="box box--small" style={styles1}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={styles2}>medium pink box</div>
const largeBox = <div className="box box--large" style={styles3}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
