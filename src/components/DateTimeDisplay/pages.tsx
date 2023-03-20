import { Box, Text } from '@chakra-ui/react';

interface ValueTypes {
  value: number,
  type: string,
  color: string
}

const DateTimeDisplay = ({ value, type, color }: ValueTypes) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Text color={color} fontSize={{ base: '28px', md: '40px', '2xl': '70px' }}>
        {value}
      </Text>
      <Text color={'white'} fontSize={{ base: '20px', md: '36', '2xl': '54px' }}>
        {type}
      </Text>
    </Box>
  );
};

export default DateTimeDisplay;
