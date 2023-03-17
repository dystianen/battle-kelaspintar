'use client';
import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay/pages';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useCountdown } from '@/utils/useCountdown/page';

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <Box display='flex' flexDirection={'row'} justifyContent={'center'} gap={{ base: '20px', md: '40px', lg: '80px' }} zIndex={10}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Heading color={'white'} fontSize={{ base: 28, md: 40, '2xl': 96 }}>
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        </Heading>
        <Text color={'white'} fontSize={{ base: 20, md: 36, '2xl': 76 }}>
          Hari
        </Text>
      </Box>
      <Heading fontSize={{ base: 40, md: 60, '2xl': 96 }}>:</Heading>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Heading color={'white'} fontSize={{ base: 28, md: 40, '2xl': 96 }}>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        </Heading>
        <Text color={'white'} fontSize={{ base: 20, md: 36, '2xl': 76 }}>
          Jam
        </Text>
      </Box>
      <Heading fontSize={{ base: 40, md: 60, '2xl': 96 }}>:</Heading>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Heading color={'white'} fontSize={{ base: 28, md: 40, '2xl': 96 }}>
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        </Heading>
        <Text color={'white'} fontSize={{ base: 20, md: 36, '2xl': 76 }}>
          Menit
        </Text>
      </Box>
      <Heading fontSize={{ base: 40, md: 60, '2xl': 96 }}>:</Heading>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Heading color={'#FFCE00'} fontSize={{ base: 28, md: 40, '2xl': 96 }}>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </Heading>
        <Text color={'white'} fontSize={{ base: 20, md: 36, '2xl': 76 }}>
          Detik
        </Text>
      </Box>
    </Box>
  );
};

export const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  console.log(days, hours, minutes, seconds)
  return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};
