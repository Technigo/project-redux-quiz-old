import React from 'react'
import { Provider } from 'react-redux'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { SideBar } from './components/SideBar'
import { store } from './store'

import { Results } from './components/Results'

export const App = () => {
  return (
    <Provider store={store}>
      <SideBar />
      <CurrentQuestion />
      <Results />
    </Provider>
  )
}

// Notes:
// prodiver wraps the consumer who will listen the store
// each consumer makes actions or fire events that affect the store and other consumers can read
// so when an event is triger and something change other components can read and change appropiately
// we have one source of true = store which is the same as state
// every component has selectors to read and dispatch actions to make changes in store
