'use client';
import React from 'react';
import {
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Grid,
  Button,
  ButtonGroup, SimpleGrid,
  InputLeftAddon,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import {Select} from 'chakra-react-select';

export default function Register() {
  return (
    <Box m={'20px'}>
      <Text fontSize={{base: '24px', lg: '40px'}} align='center' color='#000000' fontWeight='600'>
        Daftarkan Dirimu Sekarang
      </Text>

      <Box
        m={'20px'}
        py={'1rem'}
        px={{base: '1rem', sm: '4rem', md: '5rem', lg: '10rem'}}
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
            <Input placeholder={'contoh@gmail.com'} isRequired={true} bgColor={'white'} type='email' border={'0.1px'} borderRadius='30px'/>
          </FormControl>

          <FormControl>
            <FormLabel>Nama Lengkap</FormLabel>
            <Input placeholder={'Andi Santoso'} bgColor={'white'} border={'0.1px'} borderRadius='30px'/>
          </FormControl>

          <FormControl>
            <FormLabel>Nama Sekolah</FormLabel>
            <Select
              placeholder={'Kelas Pintar'}
              colorScheme="purple"
              options={[
                {
                  label: "I have the outline style",
                  value: "i-am-outlined",
                  variant: "outline", // The option variant overrides the global
                },
                {
                  label: "I fallback to the global `solid`",
                  value: "i-am-solid",
                },
              ]}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Kelas</FormLabel>
            <Select
              placeholder={'Kelas 12'}
              colorScheme="purple"
              options={[
                {
                  label: "I have the outline style",
                  value: "i-am-outlined",
                  variant: "outline", // The option variant overrides the global
                },
                {
                  label: "I fallback to the global `solid`",
                  value: "i-am-solid",
                },
              ]}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Nomor Handphone</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                children='+62'
              />
              <Input bgColor={'white'} border={'0.1px'} borderRadius='30px'/>
            </InputGroup>
            <FormHelperText>* Yang terhubung di WhatsApp</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Nomor Handphone Orang Tua</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                children='+62'
              />
              <Input bgColor={'white'} border={'0.1px'} borderRadius='30px'/>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Buat Kata Sandi</FormLabel>
            <Input bgColor={'white'} border={'0.1px'} borderRadius='30px'/>
            <FormHelperText>* Minimal 6 Karakter</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>PTN</FormLabel>
            <SimpleGrid columns={2} spacing={3}>
              <Select
                placeholder={'Jurusan'}
                colorScheme="purple"
                options={[
                  {
                    label: "Universitas Brawijaya",
                    value: "i-am-outlined",
                    variant: "outline", // The option variant overrides the global
                  },
                  {
                    label: "I fallback to the global `solid`",
                    value: "i-am-solid",
                  },
                ]}
              />
              <Select
                placeholder={'Universitas'}
                colorScheme="purple"
                options={[
                  {
                    label: "I have the outline style",
                    value: "i-am-outlined",
                    variant: "outline", // The option variant overrides the global
                  },
                  {
                    label: "I fallback to the global `solid`",
                    value: "i-am-solid",
                  },
                ]}
              />
              <Select
                placeholder={'Jurusan'}
                colorScheme="purple"
                options={[
                  {
                    label: "I have the outline style",
                    value: "i-am-outlined",
                    variant: "outline", // The option variant overrides the global
                  },
                  {
                    label: "I fallback to the global `solid`",
                    value: "i-am-solid",
                  },
                ]}
              />
              <Select
                placeholder={'Universitas'}
                colorScheme="purple"
                options={[
                  {
                    label: "I have the outline style",
                    value: "i-am-outlined",
                    variant: "outline", // The option variant overrides the global
                  },
                  {
                    label: "I fallback to the global `solid`",
                    value: "i-am-solid",
                  },
                ]}
              />
              <Select
                placeholder={'Jurusan'}
                colorScheme="purple"
                options={[
                  {
                    label: "I have the outline style",
                    value: "i-am-outlined",
                    variant: "outline", // The option variant overrides the global
                  },
                  {
                    label: "I fallback to the global `solid`",
                    value: "i-am-solid",
                  },
                ]}
              />
              <Select
                placeholder={'Universitas'}
                colorScheme="purple"
                options={[
                  {
                    label: "I have the outline style",
                    value: "i-am-outlined",
                    variant: "outline", // The option variant overrides the global
                  },
                  {
                    label: "I fallback to the global `solid`",
                    value: "i-am-solid",
                  },
                ]}
              />
            </SimpleGrid>
          </FormControl>

          <ButtonGroup spacing='2' mt={'20px'}>
            <Button w={{base: '150px', lg: '235px'}} variant='outline' borderColor={'#0055B8'} color={'#0055B8'}
                    colorScheme='blue' borderRadius={'30px'}>
              Reset
            </Button>
            <Button w={{base: '150px', lg: '235px'}} variant='solid' bgColor='#0055B8' colorScheme='blue'
                    borderRadius={'30px'}>
              Daftar
            </Button>
          </ButtonGroup>
        </Grid>
      </Box>
    </Box>
  );
}
