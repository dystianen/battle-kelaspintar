import { Text } from '@chakra-ui/react';
import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <Text>{value}</Text>
    </div>
  );
};

export default DateTimeDisplay;
