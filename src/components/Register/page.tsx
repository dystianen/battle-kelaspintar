'use client';
import React, { useState } from 'react';
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
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form'
import { Select } from 'chakra-react-select';

export default function Register() {
  const {handleSubmit, register, formState: {errors, isSubmitting}} = useForm()
  const [schoolName, setSchoolName] = useState('')
  const [className, setClassName] = useState('')
  const [ptnFirst, setPtnFirst] = useState({})
  const [ptnSecond, setPtnSecond] = useState({})
  const [ptnLast, setPtnLast] = useState({})

  const onSubmit = async (values: any) => {
    const data = {
      ...values,
      schoolName,
      className,
      ptnFirst,
      ptnSecond,
      ptnLast
    }

    console.log({data})
  }

  return (
    <Box m={'20px'}>
      <Text fontSize={{base: '24px', lg: '40px'}} align='center' color='#000000' fontWeight='600'>
        Daftarkan Dirimu Sekarang
      </Text>

      <Box
        m={'20px'}
        p={'40px'}
        bgColor={'lightgray'}
        borderRadius={'15px'}
        display={'flex'}
        justifyContent={'center'}
        gap={'15px'}
        bgGradient='linear-gradient(180deg, #EBF0F7 -181.05%, rgba(255, 255, 255, 0.21) 343.51%)'
        backdropFilter='blur(25px)'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid gap={'15px'}>
            <FormControl isRequired>
              <FormLabel>Akun Kelas Pintar</FormLabel>
              <Input {...register("email", { required: true })} placeholder={'contoh@gmail.com'} isRequired={true} bgColor={'white'} type='email'
                     border={'0.1px'} borderRadius='30px'/>
            </FormControl>

            <FormControl>
              <FormLabel>Nama Lengkap</FormLabel>
              <Input {...register("name", { required: true })} placeholder={'Andi Santoso'} bgColor={'white'} border={'0.1px'} borderRadius='30px'/>
            </FormControl>

            <FormControl>
              <FormLabel>Nama Sekolah</FormLabel>
              <Select
                onChange={(event) => setSchoolName(event.value)}
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
                onChange={(event) => setClassName(event.value)}
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
                <Input {...register("phoneNumber", { required: true })} bgColor={'white'} border={'0.1px'} borderRadius='30px'/>
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
                <Input {...register("parentNumber", { required: true })} bgColor={'white'} border={'0.1px'} borderRadius='30px'/>
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Buat Kata Sandi</FormLabel>
              <Input {...register("password", { required: true })} bgColor={'white'} border={'0.1px'} borderRadius='30px' type={'password'}/>
              <FormHelperText>* Minimal 6 Karakter</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>PTN</FormLabel>
              <SimpleGrid columns={2} spacing={3}>
                <Select
                  onChange={(event) => setPtnFirst({...ptnFirst, jurusan: event.value})}
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
                  onChange={(event) => setPtnFirst({...ptnFirst, universitas: event.value})}
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
                  onChange={(event) => setPtnSecond({...ptnSecond, jurusan: event.value})}
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
                  onChange={(event) => setPtnSecond({...ptnSecond, universitas: event.value})}
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
                  onChange={(event) => setPtnLast({...ptnLast, jurusan: event.value})}
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
                  onChange={(event) => setPtnLast({...ptnLast, universitas: event.value})}
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
              <Button type='submit' w={{base: '150px', lg: '235px'}} variant='solid' bgColor='#0055B8'
                      colorScheme='blue'
                      borderRadius={'30px'}>
                Daftar
              </Button>
            </ButtonGroup>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export const createAction = async ({request}: any) => {
}
