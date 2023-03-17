"use client"
import React from 'react';
import {
  Text,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, Box,
  Center, Select
} from '@chakra-ui/react'

export default function Register() {
  return (
    <Box display={'grid'} placeItems={'center'} minWidth={'50%'}>
      <Text fontSize='40px' align='center' mb='15px'>Daftarkan Dirimu Sekarang</Text>

      <Box
        w={'100%'}
        m={'15px'}
        p={'15px'}
        px={{base: '15px', md: '10rem'}}
        bgColor={'lightgray'}
        borderRadius={'15px'}
        display={'flex'}
        flexDirection={'column'}
        gap={'15px'}
        bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'
      >
        <FormControl>
          <FormLabel>Akun Kelas Pintar</FormLabel>
          <Input isRequired={true} bgColor={'white'} focusBorderColor='grey' bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'  type='email'/>
        </FormControl>

        <FormControl>
          <FormLabel>Nama Lengkap</FormLabel>
          <Input bgColor={'white'} focusBorderColor='grey' bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'/>
        </FormControl>

        <FormControl>
          <FormLabel>Nama Sekolah</FormLabel>
          <Select bgColor={'white'} focusBorderColor='grey' bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)' placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Kelas</FormLabel>
          <Select bgColor={'white'} focusBorderColor='grey' bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)' placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Nomor Handphone ( *yang terhubung di WhatsApp )</FormLabel>
          <Input bgColor={'white'} focusBorderColor='grey' bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'/>
        </FormControl>

        <FormControl>
          <FormLabel>Nomor Handphone Orang Tua</FormLabel>
          <Input bgColor={'white'} focusBorderColor='grey' bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'/>
        </FormControl>

        <FormControl>
          <FormLabel>Buat Kata Sandi</FormLabel>
          <Input bgColor={'white'} focusBorderColor='grey' bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'/>
          <FormHelperText>*Minimal 6 Karakter</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}