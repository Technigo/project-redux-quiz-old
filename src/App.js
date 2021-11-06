import React from 'react'
import { Provider } from 'react-redux'
import { CurrentQuestion } from 'components/CurrentQuestion/CurrentQuestion'
import { store } from './store'
import { Counter } from './components/Counter'
import { Score } from './components/Score'

export const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Score />
      <CurrentQuestion />
    </Provider>
  )
}

// Notes:
// prodiver wraps the consumer who will listen the store
// each consumer makes actions or fire events that affect the store and other consumers can read
// so when an event is triger and something change other components can read and change appropiately
// we have one source of true = store which is the same as state
// every component has selectors to read and dispatch actions to make changes in store
