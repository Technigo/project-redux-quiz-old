import React from 'react'
import { CurrentQuestion } from 'components/CurrentQuestion';
import Summary from 'components/Summary';

const Main = () => {
  return (
    <main>
      <CurrentQuestion />
      <h1>Main content</h1>
      <Summary />
    </main>
  )
}

export default Main;