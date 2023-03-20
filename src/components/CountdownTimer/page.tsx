import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay/pages';
import { Box, Text } from '@chakra-ui/react';
import useCountdown from '@/utils/useCountdown/page';

interface DateTypes {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

const ShowCounter = ({ days, hours, minutes, seconds = 0 }: DateTypes) => {
  return (
    <Box display='flex' flexDirection={'row'} justifyContent={'center'} gap={{ base: '20px', md: '40px', lg: '80px' }} zIndex={10}>
      <DateTimeDisplay key={'days'} value={days} type={'Hari'} color={'white'}/>
      <Text color={'white'} fontSize={{ base: '40px', md: '60px', '2xl': '96px' }}>:</Text>
      <DateTimeDisplay key={'hours'} value={hours} type={'Jam'} color={'white'}/>
      <Text color={'white'} fontSize={{ base: '40px', md: '60px', '2xl': '96px' }}>:</Text>
      <DateTimeDisplay key={'minutes'} value={minutes} type={'Menit'} color={'white'}/>
      <Text color={'white'} fontSize={{ base: '40px', md: '60px', '2xl': '96px' }}>:</Text>
      <DateTimeDisplay key={'seconds'} value={seconds} type={'Detik'} color={'#FFCE00'}/>
    </Box>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
