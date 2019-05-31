import React, {useState} from 'react';
import PropTypes from 'prop-types';

import IndentedBlock from './IndentedBlock';
import Text from './Text';
import CommaSeparated from './CommaSeparated';
import Toggle from './Toggle';

const propTypes = {
  keyString: PropTypes.string,
  value: PropTypes.any,
  isRoot: PropTypes.bool,
};

const nodeTypes = {
  object: 'object',
  array: 'array',
  number: 'number',
  string: 'string',
  boolean: 'boolean',
};

function JsonNode({keyString, value, isRoot}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  let type = typeof value;
  if (type === nodeTypes.object && Array.isArray(value)) {
    type = nodeTypes.array;
  }
  let content;
  let items;
  let brackets = ['', ''];
  if (value === null) {
    content = <Text danger>null</Text>;
  } else if (type === nodeTypes.string) {
    content = <Text success>{`"${value}"`}</Text>;
  } else if (type === nodeTypes.number) {
    content = <Text info>{value}</Text>;
  } else if (type === nodeTypes.boolean) {
    content = <Text warning>{value ? 'true' : 'false'}</Text>;
  } else if (type === nodeTypes.object) {
    items = Object.entries(value).map(([key, value]) => (
      <JsonNode key={key} keyString={key} value={value} />
    ));
    content = <IndentedBlock>{items}</IndentedBlock>;
    brackets = ['{', '}'];
  } else if (type === nodeTypes.array) {
    items = value.map((value, index) => <JsonNode key={index} value={value} />);
    content = <IndentedBlock>{items}</IndentedBlock>;
    brackets = ['[', ']'];
  }
  const [openingBracket, closingBracket] = brackets;
  let initialMargin;
  if (
    isRoot &&
    value !== null &&
    (type === nodeTypes.object || type === nodeTypes.array)
  ) {
    initialMargin = 20;
  }
  return (
    <CommaSeparated style={{marginLeft: initialMargin}}>
      {keyString && `"${keyString}": `}
      {openingBracket && (
        <Toggle
          show={isCollapsed}
          onClick={() => setIsCollapsed((state) => !state)}
        />
      )}
      {openingBracket}
      {!isCollapsed && content}
      {closingBracket}
      {isCollapsed && <Text muted>{` // ${items.length} item(s)`}</Text>}
    </CommaSeparated>
  );
}

JsonNode.propTypes = propTypes;

export default JsonNode;
