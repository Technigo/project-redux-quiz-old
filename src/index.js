import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

const resetHeight = () => {
  document.body.style.height = `${window.innerHeight}px`
}
window.addEventListener('resize', resetHeight)
resetHeight()