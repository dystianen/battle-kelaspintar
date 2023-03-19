'use client';
import React from 'react';
import { Text, Flex, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Center, Select, Grid, Button, HStack, Spacer, ButtonGroup } from '@chakra-ui/react';

export default function Register() {
  return (
    <>
      <Text fontSize='40px' align='center' mb='15px' color='#000000' fontWeight='600'>
        Daftarkan Dirimu Sekarang
      </Text>

      <Box w={'922px'} py={'15px'} px={'10rem'} bgColor={'lightgray'} borderRadius={'15px'} display={'flex'} justifyContent={'center'} gap={'15px'} bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'>
        <Grid gap={'15px'}>
          <FormControl>
            <FormLabel color={'#000000'}>Akun Kelas Pintar</FormLabel>
            <Input isRequired={true} bgColor={'white'} type='email' focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel color={'#000000'}>Nama Lengkap</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel color={'#000000'}>Nama Sekolah</FormLabel>
            <Select bgColor={'white'} color={'#000000'} focusBorderColor='grey' borderRadius='30px' placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel color={'#000000'}>Kelas</FormLabel>
            <Select bgColor={'white'} focusBorderColor='grey' borderRadius='30px' placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel color={'#000000'}>Nomor Handphone ( *yang terhubung di WhatsApp )</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel color={'#000000'}>Nomor Handphone Orang Tua</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
          </FormControl>

          <FormControl>
            <FormLabel color={'#000000'}>Buat Kata Sandi</FormLabel>
            <Input bgColor={'white'} focusBorderColor='grey' borderRadius='30px' />
            <FormHelperText>*Minimal 6 Karakter</FormHelperText>
          </FormControl>

          <ButtonGroup spacing='2'>
            <Button w={'235px'} variant='outline' colorScheme='blue' borderRadius={'30px'}>
              Reset
            </Button>
            <Button w={'235px'} variant='solid' colorScheme='blue' borderRadius={'30px'}>
              Daftar
            </Button>
          </ButtonGroup>
        </Grid>
      </Box>
    </>
  );
}
