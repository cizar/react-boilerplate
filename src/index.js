import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Hello from './components/Hello'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component name="World"/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Hello)

if (module.hot) {
  module.hot.accept('./components/Hello', () => { render(Hello) })
}