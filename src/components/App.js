import React, {useState} from 'react'

import JsonNode from './JsonNode'
import Container from './Container'
import ResultContainer from './ResultContainer'
import GlobalStyle from './GlobalStyle'
import Textarea from './Textarea'
import Text from './Text'

const App = () => {
  const [input, setInput] = useState('')
  let parsedInput
  let errorMessage
  if (input.trim() !== '') {
    try {
      parsedInput = JSON.parse(input)
    } catch (error) {
      errorMessage = error.toString()
    }
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Textarea onChange={(event) => setInput(event.target.value)} />
        <ResultContainer>
          {errorMessage ? (
            <Text bold danger>
              {errorMessage}
            </Text>
          ) : (
            <JsonNode isRoot key="" value={parsedInput} />
          )}
        </ResultContainer>
      </Container>
    </>
  )
}

export default App
