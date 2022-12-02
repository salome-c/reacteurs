import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CacheCache from './cachecache/CacheCache'
import registerServiceWorker from './registerServiceWorker'

//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<CacheCache />, document.getElementById('root'))
registerServiceWorker()
