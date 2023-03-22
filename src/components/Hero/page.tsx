import React, {PropsWithRef} from 'react';
import { AbsoluteCenter, Box, Center, Text, Image, VStack, ButtonGroup, Button } from '@chakra-ui/react';

export default function Hero(props: PropsWithRef) {
  return (
    <Box minH={'100vh'} bg={'#f9c150'} position={'relative'} pt={{ base: '15rem', md: '10rem' }}>
      {/* STAR TOP */}
      <Image position={'absolute'} right={{ base: '2rem', md: '20rem' }} top={{ base: '4rem', md: '5rem' }} w={{ base: '23px', md: '44px' }} h={{ base: '23px', md: '43px' }} src='/assets/particle/star-white.png' alt='Star' />
      <Image position={'absolute'} left={{ base: '3rem', md: '20rem' }} top={{ base: '1rem', md: '2rem' }} w={{ base: '12px', md: '23px' }} h={{ base: '11px', md: '22px' }} src='/assets/particle/star-white.png' alt='Star' />

      {/* STAR BOTTOM */}
      <Image position={'absolute'} right={{ base: '2rem', md: '30rem' }} bottom={{ base: '4rem', md: '18rem' }} w={{ base: '23px', md: '19px' }} h={{ base: '23px', md: '19px' }} src='/assets/particle/star-white.png' alt='Star' />
      <Image position={'absolute'} left={{ base: '3rem', md: '5rem' }} bottom={{ base: '1rem', md: '10rem' }} w={{ base: '12px', md: '45px' }} h={{ base: '11px', md: '44px' }} src='/assets/particle/star-white.png' alt='Star' />

      <Center w={'100%'}>
        <Image position={'absolute'} w={'clamp(200px, 50vw, 453px)'} h={'clamp(10px, 50vw, 305px)'} src='/assets/logo/battle-logo.png' alt='Kelas Pintar' />
        <VStack w={'100%'} spacing={5}>
          <Box w={'100%'} bg={'#FFFFFF'} h={{ base: '30px', md: '50px' }}></Box>
          <Box w={'100%'} bg={'#FFFFFF'} h={{ base: '30px', md: '50px' }}></Box>
        </VStack>
      </Center>

      <Center>
        <Text textAlign={'center'} pt={'6rem'} fontSize={'clamp(16px, 5vw, 32px)'} color={'#264991'} fontWeight={600}>
          Uji kemampuan dan kesiapan kamu dalam menghadapi <br /> <span style={{ color: '#FFFFFF' }}>SNBT 2023</span> bersama <span style={{ color: '#FFFFFF' }}>Kelas Pintar</span>
        </Text>
      </Center>

      <Center>
        <ButtonGroup spacing={2} mt={'20px'}>
          <Button onClick={props.handleRegister} w={'clamp(8rem, 20vw, 10rem)'} variant='solid' bgColor='#FFFFFF' color='#0055B8' borderRadius={'30px'}>
            Daftar
          </Button>
          <Button type='submit' w={'clamp(8rem, 20vw, 10rem)'} variant='solid' bgColor={'#F1A449'} colorScheme='orange' borderRadius={'30px'} border={'2px solid white'} color={'white'}>
            Masuk
          </Button>
        </ButtonGroup>
      </Center>
    </Box>
  );
}