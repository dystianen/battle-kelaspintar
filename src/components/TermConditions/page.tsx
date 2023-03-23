import React, { useState } from 'react';
import { Box, Center, HStack, Text, Image, OrderedList, ListItem, VStack, Show } from '@chakra-ui/react';

export default function TermConditions() {
  const [isSelect, setIsSelect] = useState('FAQ');

  const onSelect = (select: string) => {
    setIsSelect(select);
  };

  return (
    <Box zIndex={0} minH={'80vh'} pt={{base: '2rem', md: '5rem'}} bgColor={'#0055B8'} position={'relative'}>
      <Image position={'absolute'} right={{ base: '1rem', md: '20rem' }} top={{ base: '1rem', md: '5rem' }} w={{ base: '23px', md: '15px' }} h={{ base: '23px', md: '15px' }} src='/assets/particle/star-white.png' alt='Star' />
      <Image position={'absolute'} left={{ base: '1rem', md: '10rem' }} top={{ base: '5rem', md: '10rem' }} w={{ base: '23px', md: '15px' }} h={{ base: '23px', md: '15px' }} src='/assets/particle/star-white.png' alt='Star' />
      <Show breakpoint={'(min-width: 768px)'}>
        <Image position={'absolute'} right={{ base: '4rem', md: '15rem' }} top={{ base: '5rem', md: '20rem' }} w={{ base: '23px', md: '15px' }} h={{ base: '23px', md: '15px' }} src='/assets/particle/star-white.png' alt='Star' />
      </Show>

      <Center p={'2em'} pb={'4em'}>
        <VStack>
          <HStack spacing={{ base: '1rem', md: '5rem' }}>
            <Box
              onClick={() => onSelect('FAQ')}
              _hover={{
                cursor: 'pointer',
              }}
              borderBottom={`4px solid ${isSelect === 'FAQ' ? '#FFFFFF' : '#4080C9'}`}
              px={{ base: '2rem', md: '4rem' }}
            >
              <Text fontSize={'32px'} color={isSelect === 'FAQ' ? '#FFFFFF' : '#4080C9'}>
                FAQ
              </Text>
            </Box>
            <Box
              onClick={() => onSelect('S&K')}
              _hover={{
                cursor: 'pointer',
              }}
              borderBottom={`4px solid ${isSelect === 'S&K' ? '#FFFFFF' : '#4080C9'}`}
              px={{ base: '2rem', md: '4rem' }}
            >
              <Text fontSize={'32px'} color={isSelect === 'S&K' ? '#FFFFFF' : '#4080C9'}>
                S&K
              </Text>
            </Box>
          </HStack>

          {isSelect === 'S&K' && (
            <Box maxW={'550px'}>
              <Text textAlign={'center'} fontSize={{ base: '24px', md: '40px' }} py={'1rem'}>
                Syarat & Ketentuan Umum
              </Text>
              <OrderedList spacing={2}>
                <ListItem>Peserta Battle SNBT 2023 merupakan siswa/i SMA/SMK kelas 12</ListItem>
                <ListItem>Peserta Battle SNBT 2023 wajib mengerjakan soal Try Out secara mandiri</ListItem>
                <ListItem>Kelas Pintar berhak menggugurkan peserta Battle SNBT 2023 yang melakukan kecurangan dalam mengerjakan try out</ListItem>
                <ListItem>Keputusan pemenang Battle Pintar SNBT 2023 menjadi hak dari Kelas Pintar dan keputusan tidak dapat diganggu gugat</ListItem>
                <ListItem>Pemenang Battle Pintar SNBT 2023 akan dihubungi oleh tim Kelas Pintar melalui telepon untuk proses penyerahan hadiah</ListItem>
              </OrderedList>
            </Box>
          )}

          {isSelect === 'FAQ' && (
            <Box maxW={'550px'}>
              <Text textAlign={'center'} fontSize={{ base: '24px', md: '40px' }} py={'1rem'}>
                FAQ
              </Text>
              <OrderedList spacing={2}>
                <ListItem>Peserta Battle SNBT 2023 merupakan siswa/i SMA/SMK kelas 12</ListItem>
                <ListItem>Peserta Battle SNBT 2023 wajib mengerjakan soal Try Out secara mandiri</ListItem>
                <ListItem>Kelas Pintar berhak menggugurkan peserta Battle SNBT 2023 yang melakukan kecurangan dalam mengerjakan try out</ListItem>
                <ListItem>Keputusan pemenang Battle Pintar SNBT 2023 menjadi hak dari Kelas Pintar dan keputusan tidak dapat diganggu gugat</ListItem>
                <ListItem>Pemenang Battle Pintar SNBT 2023 akan dihubungi oleh tim Kelas Pintar melalui telepon untuk proses penyerahan hadiah</ListItem>
              </OrderedList>
            </Box>
          )}
        </VStack>
      </Center>
    </Box>
  );
}
