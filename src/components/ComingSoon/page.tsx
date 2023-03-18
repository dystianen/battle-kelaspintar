'use client';
import React from 'react';
import { Box, Heading, Hide, Image, Show, Text } from '@chakra-ui/react';
import { CountdownTimer } from '../CountdownTimer/page';

export default function CommingSoon() {
  const event = new Date('2023-03-27T11:51:59').getTime();

  return (
    <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems={'center'} gap={{ base: '2rem', md: '1rem', lg: 0 }} minWidth={'50%'} minH={'100vh'} bgColor={'#0055B8'}>
      <Image w={{base: '100px', md: '300px'}} h={{base: '150px', md: '100px'}} src='/assets/images/particle1.png' alt='particle' position='absolute' top={0} right={0} />

      <Image w={{ base: '200px', md: '450px', '2xl': '400px' }} h={{ base: '200px', md: '250px', '2xl': '300px' }} src='/assets/images/particle-bottom.png' alt='particle' position='absolute' bottom={0} left={0} />

      <Image w={'80px'} h={'160px'} objectFit='cover' src='/assets/images/star-1.png' alt='particle' position='absolute' top={100} left={0} />

      <Image w={'80px'} h={'200px'} objectFit='cover' src='/assets/images/star-right.png' alt='particle' position='absolute' top={200} right={0} />

      <Box zIndex={100}>
        <Image w={{ base: '140px', md: '200px', lg: '180px' }} h={{ base: '60px', md: '100px', lg: '80px' }} src='/assets/images/logo-kp.png' alt='kelas pintar' />
        <Text fontSize={{ base: '14px', md: '20px' }} color={'white'} mb={{ base: 5, lg: 2 }} mt={5}>
          Mempersembahkan :
        </Text>
      </Box>

      <Box textAlign={'center'} zIndex={10}>
        <Heading fontSize={{ base: '24px', md: '40px', lg: '50px', '2xl': '60px' }} color='white' fontWeight={600} mb={2}>
          Battle <span style={{ color: '#FFCE00' }}>Pintar SNBT</span> 2023
        </Heading>
        <Text color={'white'} fontSize={{ base: '14px', md: '20px' }} fontWeight={400}>
          Bersiaplah untuk Battle Pintar SNBT 2023 dan{' '}
          <Show breakpoint='(max-width: 500px)'>
            <br />
          </Show>
          Menangkan Hadiah Total Puluhan Juta Rupiah
        </Text>
      </Box>

      <Box border='1px' borderColor='gray.200' borderRadius={'20px'} p={3} m={{ base: 5, md: 10 }} style={{ zIndex: '100' }}>
        <Box display={'flex'} flexDirection={'row'} gap={{ base: '25px', lg: '50px' }} bgColor={'#1067CD'} py={'20px'} px={{ base: '20px', md: '35px' }} borderRadius={'20px'}>
          <Box textAlign={'center'}>
            <Text color={'white'} fontSize={{ base: '20px', md: '24px' }}>
              Pendaftaran Peserta di mulai
            </Text>
            <Text color={'#FFCE00'} fontSize={{ base: '20px', md: '24px', lg: '30px' }}>
              27 Mar - 08 Apr 2023
            </Text>
          </Box>
        </Box>
      </Box>

      <Text color={'white'} fontSize={'20px'} zIndex={10}>
        Menjelang Acara
      </Text>

      <CountdownTimer targetDate={event} />
    </Box>
  );
}
