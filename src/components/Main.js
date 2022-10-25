import React from 'react'
import { CurrentQuestion } from 'components/CurrentQuestion';
import Summary from 'components/Summary';
// import Welcome from './Welcome';

const Main = () => {
  return (
    <main>
      {/* <Welcome /> */}
      <CurrentQuestion />
      <h1>Main content</h1>
      <Summary />
    </main>
  )
}

export default Main;