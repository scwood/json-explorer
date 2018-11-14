import React, {useState} from 'react'
import PropTypes from 'prop-types'

import IndentedBlock from './IndentedBlock'
import Text from './Text'
import CommaSeparated from './CommaSeparated'
import Toggle from './Toggle'

const propTypes = {
  keyString: PropTypes.string,
  value: PropTypes.any,
  root: PropTypes.boolean,
}

const types = {
  object: 'object',
  array: 'array',
  number: 'number',
  string: 'string',
  boolean: 'boolean',
}

const JsonNode = ({keyString, value, root}) => {
  const [collapsed, setCollapsed] = useState(false)
  let type = typeof value
  if (type === types.object && Array.isArray(value)) {
    type = types.array
  }
  let content
  let items
  let brackets = ['', '']
  if (value === null) {
    content = <Text danger>null</Text>
  } else if (type === types.string) {
    content = <Text success>{`"${value}"`}</Text>
  } else if (type === types.number) {
    content = <Text info>{value}</Text>
  } else if (type === types.boolean) {
    content = <Text warning>{value ? 'true' : 'false'}</Text>
  } else if (type === types.object) {
    items = Object.entries(value).map(([key, value]) => (
      <JsonNode key={key} keyString={key} value={value} />
    ))
    content = <IndentedBlock>{items}</IndentedBlock>
    brackets = ['{', '}']
  } else if (type === types.array) {
    items = value.map((value, index) => <JsonNode key={index} value={value} />)
    content = <IndentedBlock>{items}</IndentedBlock>
    brackets = ['[', ']']
  }
  const [opening, closing] = brackets
  let initialMargin
  if (root && (type === 'object' || type === 'array')) {
    initialMargin = 20
  }
  return (
    <CommaSeparated style={{marginLeft: initialMargin}}>
      {keyString && `"${keyString}": `}
      {opening && (
        <Toggle
          show={collapsed}
          onClick={() => setCollapsed((state) => !state)}
        />
      )}
      {opening}
      {!collapsed && content}
      {closing}
      {collapsed && <Text muted>{` // ${items.length} item(s)`}</Text>}
    </CommaSeparated>
  )
}

JsonNode.propTypes = propTypes

export default JsonNode
