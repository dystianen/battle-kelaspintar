import { Box, Heading, Text } from '@chakra-ui/react';

type ValueTypes = {
  value: number,
  type: string,
  color: string
}

const DateTimeDisplay = ({ value, type, color }: ValueTypes) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Text color={color} fontSize={{ base: '28px', md: '40px', '2xl': '96px' }}>
        {value}
      </Text>
      <Text color={'white'} fontSize={{ base: 20, md: 36, '2xl': 76 }}>
        {type}
      </Text>
    </Box>
  );
};

export default DateTimeDisplay;
