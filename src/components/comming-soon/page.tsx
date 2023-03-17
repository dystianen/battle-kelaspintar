"use client"
import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react'

export default function CommingSoon() {
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      justifyContent={'center'}
      alignItems={'center'}
      gap={'2rem'}
      minWidth={'50%'}
      minH={'100vh'}
      bgColor="#0055B8"
    >
      <Image
        w={'500px'}
        h={'200px'}
        src='/assets/images/particle1.png'
        alt='Dan Abramov'
        position='absolute'
        top={0}
        right={0}
      />

      <Image
        w={'500px'}
        h={'300px'}
        src='/assets/images/particle-bottom.png'
        alt='Dan Abramov'
        position='absolute'
        bottom={0}
        left={0}
      />

      <Image
        w={'80px'}
        h={'160px'}
        objectFit='cover'
        src='/assets/images/star-1.png'
        alt='Dan Abramov'
        position='absolute'
        top={150}
        left={0}
      />

      <Image
        w={'80px'}
        h={'200px'}
        objectFit='cover'
        src='/assets/images/star-right.png'
        alt='Dan Abramov'
        position='absolute'
        top={400}
        right={0}
      />

      <Image
        w={'177px'}
        h={'80px'}
        objectFit='cover'
        src='/assets/images/logo-kp.png'
        alt='Dan Abramov'
      />

      <div align={'center'} style={{zIndex: '100'}}>
        <Text color={'white'}>Mempersembahkan:</Text>
        <Heading fontSize='60px' color='white' fontWeight={600}>Battle <span
          style={{color: '#FFCE00'}}>Pintar SNBT</span> 2023</Heading>
        <Text color={'white'} fontSize={'20px'} fontWeight={400}>
          Bersiaplah untuk Battle Pintar SNBT 2023 dan Menangkan Hadiah Total Puluhan Juta Rupiah
        </Text>
      </div>

      <Box border='1px' borderColor='gray.200' borderRadius={'20px'} p={3} style={{zIndex: '100'}}>
        <Box display={'flex'} flexDirection={'row'} gap={'50px'} bgColor={'#1067CD'} py={'20px'} px={'35px'}
             borderRadius={'20px'}>
          <div align={'center'}>
            <Text color={'white'} fontSize={'28px'}>Catat Tanggalnya</Text>
            <Text color={'#FFCE00'} fontSize={'28px'}>27 Mar - 08 Apr 2023</Text>
          </div>

          <div align={'center'}>
            <Text color={'white'} fontSize={'28px'}>Pendaftaran</Text>
            <Text color={'#FFCE00'} fontSize={'28px'}>27 Mar - 08 Apr 2023</Text>
          </div>
        </Box>
      </Box>

      <Text color={'white'} fontSize={'20px'}>Menjelang Acara</Text>

      <Box display='flex' flexDirection={'row'} justifyContent={'center'} gap={'80px'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Heading color={'white'} fontSize={50}>13</Heading>
          <Text color={'white'} fontSize={24}>Hari</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Heading color={'white'} fontSize={50}>22</Heading>
          <Text color={'white'} fontSize={24}>Jam</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Heading color={'white'} fontSize={50}>56</Heading>
          <Text color={'white'} fontSize={24}>Menit</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Heading color={'#FFCE00'} fontSize={50}>20</Heading>
          <Text color={'white'} fontSize={24}>Detik</Text>
        </Box>
      </Box>
    </Box>
  )
}