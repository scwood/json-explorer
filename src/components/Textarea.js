import styled from 'styled-components'

const Textarea = styled.textarea.attrs({
  placeholder: 'Paste JSON here...',
})`
  flex: 1;
  resize: none;
  border-radius: 0.25em;
  border: 1px solid lightgray;
  font-size: 1em;
  margin: 10px;
  padding: 10px;
`

export default Textarea
