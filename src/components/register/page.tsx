'use client';
import React from 'react';
import { Text, FormControl, FormLabel, FormHelperText, Input, Box, Select, Grid, Button, ButtonGroup } from '@chakra-ui/react';

export default function Register() {
  return (
    <Box m={'20px'}>
      <Text fontSize={{ base: '24px', lg: '40px' }} align='center' color='#000000' fontWeight='600'>
        Daftarkan Dirimu Sekarang
      </Text>

      <Box
        m={'20px'}
        py={'1rem'}
        px={{ base: '1rem', sm: '4rem', md: '5rem', lg: '10rem' }}
        bgColor={'lightgray'}
        borderRadius={'15px'}
        display={'flex'}
        justifyContent={'center'}
        gap={'15px'}
        bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'
        backdropFilter='blur(25px)'
      >
        <Grid gap={'15px'}>
          <FormControl>
            <FormLabel>Akun Kelas Pintar</FormLabel>
            <Input isRequired={true} bgColor={'white'} type='email' focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel>Nama Lengkap</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel>Nama Sekolah</FormLabel>
            <Select bgColor={'white'} focusBorderColor='grey' borderRadius='30px' placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Kelas</FormLabel>
            <Select bgColor={'white'} focusBorderColor='grey' borderRadius='30px' placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Nomor Handphone ( *yang terhubung di WhatsApp )</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel>Nomor Handphone Orang Tua</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel>Buat Kata Sandi</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
            <FormHelperText>*Minimal 6 Karakter</FormHelperText>
          </FormControl>

          <ButtonGroup spacing='2'>
            <Button w={{ base: '150px', lg: '235px' }} variant='outline' colorScheme='blue' borderRadius={'30px'}>
              Reset
            </Button>
            <Button w={{ base: '150px', lg: '235px' }} variant='solid' colorScheme='blue' borderRadius={'30px'}>
              Daftar
            </Button>
          </ButtonGroup>
        </Grid>
      </Box>
    </Box>
  );
}
