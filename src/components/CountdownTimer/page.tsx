import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay/pages';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useCountdown } from '@/utils/useCountdown/page';

type DateTypes = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

const ShowCounter = ({ days, hours, minutes, seconds }: DateTypes) => {
  return (
    <Box display='flex' flexDirection={'row'} justifyContent={'center'} gap={{ base: '20px', md: '40px', lg: '80px' }} zIndex={10}>
      <DateTimeDisplay value={days} type={'Hari'} color={'white'}/>
      <Text fontSize={{ base: '40px', md: '60px', '2xl': '96px' }}>:</Text>
      <DateTimeDisplay value={hours} type={'Jam'} color={'white'}/>
      <Text fontSize={{ base: '40px', md: '60px', '2xl': '96px' }}>:</Text>
      <DateTimeDisplay value={minutes} type={'Menit'} color={'white'}/>
      <Text fontSize={{ base: '40px', md: '60px', '2xl': '96px' }}>:</Text>
      <DateTimeDisplay value={seconds} type={'Detik'} color={'#FFCE00'}/>
    </Box>
  );
};

export const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  console.log(days, hours, minutes, seconds, { targetDate });
  return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};
