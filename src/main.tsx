import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
)

/*

  optimized -> HistoryComponent 
  fetch Gifs  -> perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

*/