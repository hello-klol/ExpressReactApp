import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import data from '../../backend/data.json'

ReactDOM.render(<App data={data} />, document.getElementById('root'))
