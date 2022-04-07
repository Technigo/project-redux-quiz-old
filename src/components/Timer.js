import React from 'react'
import styled from 'styled-components'

const Countdown = styled.section`
  text-align: center;
  color: red;
  font-family: 'Russo One', sans-serif;
  font-size: 20px;
`

const Timer = () => {
  const [counter, setCounter] = React.useState(1)

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    counter > 0 && setTimeout(() => setCounter(counter + 1), 1000)
  }, [counter])

  return <Countdown>Can you beat the clock: {counter}</Countdown>
}
export default Timer
