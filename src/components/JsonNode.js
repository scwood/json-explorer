import React from 'react'
import PropTypes from 'prop-types'

import IndentedBlock from './IndentedBlock'
import Text from './Text'
import CommaSeparated from './CommaSeparated'

const propTypes = {
  keyString: PropTypes.string,
  value: PropTypes.any,
}

const types = {
  object: 'object',
  array: 'array',
  number: 'number',
  string: 'string',
}

const JsonNode = ({keyString, value}) => {
  let type = typeof value
  if (type === types.object && Array.isArray(value)) {
    type = types.array
  }
  let content
  let brackets = ['', '']
  if (type === types.object) {
    const items = Object.entries(value).map(([key, value]) => (
      <JsonNode key={key} keyString={key} value={value} />
    ))
    content = <IndentedBlock>{items}</IndentedBlock>
    brackets = ['{', '}']
  } else if (type === types.array) {
    const items = value.map((value, index) => (
      <JsonNode key={index} value={value} />
    ))
    content = <IndentedBlock>{items}</IndentedBlock>
    brackets = ['[', ']']
  } else if (type === types.string) {
    content = <Text success>{`"${value}"`}</Text>
  } else if (type === types.number) {
    content = <Text info>{value}</Text>
  }
  const [opening, closing] = brackets
  return (
    <CommaSeparated>
      {keyString && `"${keyString}": `}
      {opening}
      {content}
      {closing}
    </CommaSeparated>
  )
}

JsonNode.propTypes = propTypes

export default JsonNode
