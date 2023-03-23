'use client';
import React, { useState } from 'react';
import { Text, FormControl, FormLabel, Input, Box, Grid, Button, ButtonGroup, SimpleGrid, InputGroup, InputRightElement, GridItem, Icon, Show, HStack, Container, Image, Center } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Select } from 'chakra-react-select';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { authenticateRepository } from '@/repository/authenticate';

export default function Register(props: any) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [show, setShow] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [className, setClassName] = useState('');
  const [ptnFirst, setPtnFirst] = useState({});
  const [ptnSecond, setPtnSecond] = useState({});
  const [ptnLast, setPtnLast] = useState({});

  
  const {data: packages, isValidating} = authenticateRepository.hooks.useGetSchool();
  const {data: progress} = authenticateRepository.hooks.useGetClass();

  const onSubmit = async (values: any) => {
    const data = {
      ...values,
      schoolName,
      className,
      ptnFirst,
      ptnSecond,
      ptnLast,
    };

    console.log({ data });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Box minH={'100vh'} bgColor={'#f9c150'} borderTopRadius={'95px'} position={'relative'} ref={props.registerRef}>
      <Image zIndex={0} position={'absolute'} mt={'15rem'} src={'/assets/background/register.png'} />
      <Center>
        <Container zIndex={10} maxW={'4xl'} p={'20px'}>
          <Text alignSelf={{ base: 'center', md: 'end', lg: 'center' }} fontSize={'clamp(24px, 4vw, 36px)'} align={'center'} color={'white'} fontWeight={600} mb={'10px'}>
            Daftarkan diri kamu sekarang!
          </Text>
          <Box p={{ base: '20px', md: '40px' }} bgColor={'white'} borderRadius={'15px'} display={'flex'} justifyContent={'center'} gap={'15px'}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <Grid gap={'15px'}>
                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <FormLabel>Akun Kelas Pintar</FormLabel>
                    <HStack alignItems={'start'} gap={'10px'}>
                      <Show breakpoint='(min-width: 768px)'>
                        <Show breakpoint='(min-width: 768px)'>
                          <Text fontSize={'lg'} color={'#0055B8'}>
                            :
                          </Text>
                        </Show>
                      </Show>
                      <Input {...register('email', { required: true })} placeholder={'Email'} bgColor={'#e3ebfe'} type='email' border={'0.1px'} borderRadius='30px' />
                    </HStack>
                  </SimpleGrid>
                </FormControl>

                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <HStack alignItems={'start'} gap={'10px'}>
                      <Show breakpoint='(min-width: 768px)'>
                        <Text fontSize={'lg'} color={'#0055B8'}>
                          :
                        </Text>
                      </Show>
                      <Input {...register('name', { required: true })} placeholder={'Nama Lengkap'} bgColor={'#e3ebfe'} border={'0.1px'} borderRadius='30px' />
                    </HStack>
                  </SimpleGrid>
                </FormControl>

                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <FormLabel>Nama Sekolah</FormLabel>
                    <HStack alignItems={'start'} gap={'10px'}>
                      <Show breakpoint='(min-width: 768px)'>
                        <Text fontSize={'lg'} color={'#0055B8'}>
                          :
                        </Text>
                      </Show>
                      <Select
                        onChange={(event: any) => setSchoolName(event.value)}
                        placeholder={'Pilih Sekolah'}
                        colorScheme='purple'
                        options={[
                          {
                            label: 'I have the outline style',
                            value: 'i-am-outlined',
                            variant: 'outline', // The option variant overrides the global
                          },
                          {
                            label: 'I fallback to the global `solid`',
                            value: 'i-am-solid',
                          },
                        ]}
                      />
                    </HStack>
                  </SimpleGrid>
                </FormControl>

                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <FormLabel>Kelas</FormLabel>
                    <HStack alignItems={'start'} gap={'10px'}>
                      <Show breakpoint='(min-width: 768px)'>
                        <Text fontSize={'lg'} color={'#0055B8'}>
                          :
                        </Text>
                      </Show>
                      <Select
                        onChange={(event: any) => setClassName(event.value)}
                        placeholder={'Pilih Kelas'}
                        colorScheme='purple'
                        options={[
                          {
                            label: 'I have the outline style',
                            value: 'i-am-outlined',
                            variant: 'outline', // The option variant overrides the global
                          },
                          {
                            label: 'I fallback to the global `solid`',
                            value: 'i-am-solid',
                          },
                        ]}
                      />
                    </HStack>
                  </SimpleGrid>
                </FormControl>

                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <FormLabel>Nomor Handphone</FormLabel>
                    <HStack alignItems={'start'} gap={'10px'}>
                      <Show breakpoint='(min-width: 768px)'>
                        <Text fontSize={'lg'} color={'#0055B8'}>
                          :
                        </Text>
                      </Show>
                      <Input {...register('phoneNumber', { required: true })} type='number' placeholder={'(yang terhubung dengan WhatsApp)'} bgColor={'#e3ebfe'} border={'0.1px'} borderRadius='30px' />
                    </HStack>
                  </SimpleGrid>
                </FormControl>

                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <FormLabel>Nomor Handphone Orang Tua</FormLabel>
                    <HStack alignItems={'start'} gap={'10px'}>
                      <Show breakpoint='(min-width: 768px)'>
                        <Text fontSize={'lg'} color={'#0055B8'}>
                          :
                        </Text>
                      </Show>
                      <Input {...register('parentNumber', { required: true })} type={'number'} placeholder={'(yang terhubung dengan WhatsApp)'} bgColor={'#e3ebfe'} border={'0.1px'} borderRadius='30px' />
                    </HStack>
                  </SimpleGrid>
                </FormControl>

                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <FormLabel>Buat Kata Sandi</FormLabel>
                    <HStack alignItems={'start'} gap={'10px'}>
                      <Show breakpoint='(min-width: 768px)'>
                        <Text fontSize={'lg'} color={'#0055B8'}>
                          :
                        </Text>
                      </Show>
                      <InputGroup size='md'>
                        <Input {...register('password', { required: true })} bgColor={'#e3ebfe'} border={'0.1px'} borderRadius='30px' type={show ? 'text' : 'password'} />
                        <InputRightElement width='4rem'>{show ? <Icon onClick={handleShow} as={IoMdEye} /> : <Icon onClick={handleShow} as={IoMdEyeOff} />}</InputRightElement>
                      </InputGroup>
                    </HStack>
                  </SimpleGrid>
                </FormControl>

                <SimpleGrid columns={{ base: 1, md: 2 }} alignSelf={{ base: 'end', md: 'start' }} mb={{ base: '-20px', md: 0 }} mt={{ base: '20px', md: 0 }}>
                  <FormLabel m={0}>Jurusan dan Pilihan Universitas kamu</FormLabel>
                  <Show breakpoint={'(min-width: 768px)'}>
                    <Text fontSize={'lg'} color={'#0055B8'} alignSelf={'start'}>
                      :
                    </Text>
                  </Show>
                </SimpleGrid>

                <FormControl>
                  <Box>
                    <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }} templateRows={'repeat(3, 1fr)'} gap={{ base: 2, md: 5 }}>
                      <GridItem colSpan={{ base: 4, md: 1 }} alignSelf={{ base: 'end', md: 'start' }}>
                        <FormLabel m={0}>Pilihan 1</FormLabel>
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }}>
                        <Select
                          onChange={(event: any) => setPtnFirst({ ...ptnFirst, jurusan: event.value })}
                          placeholder={'Jurusan'}
                          colorScheme='purple'
                          options={[
                            {
                              label: 'Universitas Brawijaya',
                              value: 'i-am-outlined',
                              variant: 'outline', // The option variant overrides the global
                            },
                            {
                              label: 'I fallback to the global `solid`',
                              value: 'i-am-solid',
                            },
                          ]}
                        />
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }}>
                        <Select
                          onChange={(event: any) => setPtnFirst({ ...ptnFirst, universitas: event.value })}
                          placeholder={'Universitas'}
                          colorScheme='purple'
                          options={[
                            {
                              label: 'I have the outline style',
                              value: 'i-am-outlined',
                              variant: 'outline', // The option variant overrides the global
                            },
                            {
                              label: 'I fallback to the global `solid`',
                              value: 'i-am-solid',
                            },
                          ]}
                        />
                      </GridItem>

                      <GridItem colSpan={{ base: 4, md: 1 }}>
                        <FormLabel m={0}>Pilihan 2</FormLabel>
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }}>
                        <Select
                          onChange={(event: any) => setPtnSecond({ ...ptnSecond, jurusan: event.value })}
                          placeholder={'Jurusan'}
                          colorScheme='purple'
                          options={[
                            {
                              label: 'I have the outline style',
                              value: 'i-am-outlined',
                              variant: 'outline', // The option variant overrides the global
                            },
                            {
                              label: 'I fallback to the global `solid`',
                              value: 'i-am-solid',
                            },
                          ]}
                        />
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }}>
                        <Select
                          onChange={(event: any) => setPtnSecond({ ...ptnSecond, universitas: event.value })}
                          placeholder={'Universitas'}
                          colorScheme='purple'
                          options={[
                            {
                              label: 'I have the outline style',
                              value: 'i-am-outlined',
                              variant: 'outline', // The option variant overrides the global
                            },
                            {
                              label: 'I fallback to the global `solid`',
                              value: 'i-am-solid',
                            },
                          ]}
                        />
                      </GridItem>

                      <GridItem colSpan={{ base: 4, md: 1 }}>
                        <FormLabel m={0}>Pilihan 3</FormLabel>
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }}>
                        <Select
                          onChange={(event: any) => setPtnLast({ ...ptnLast, jurusan: event.value })}
                          placeholder={'Jurusan'}
                          colorScheme='purple'
                          options={[
                            {
                              label: 'I have the outline style',
                              value: 'i-am-outlined',
                              variant: 'outline', // The option variant overrides the global
                            },
                            {
                              label: 'I fallback to the global `solid`',
                              value: 'i-am-solid',
                            },
                          ]}
                        />
                      </GridItem>
                      <GridItem colSpan={{ base: 4, md: 2 }}>
                        <Select
                          onChange={(event: any) => setPtnLast({ ...ptnLast, universitas: event.value })}
                          placeholder={'Universitas'}
                          colorScheme='purple'
                          options={[
                            {
                              label: 'I have the outline style',
                              value: 'i-am-outlined',
                              variant: 'outline', // The option variant overrides the global
                            },
                            {
                              label: 'I fallback to the global `solid`',
                              value: 'i-am-solid',
                            },
                          ]}
                        />
                      </GridItem>
                    </Grid>
                  </Box>
                </FormControl>

                <Box textAlign={'center'}>
                  <ButtonGroup spacing={2} mt={'20px'}>
                    <Button w={'clamp(8rem, 20vw, 15rem)'} variant='outline' borderColor={'#f9c150'} color={'#f9c150'} colorScheme='yellow' borderRadius={'30px'}>
                      Reset
                    </Button>
                    <Button type='submit' w={'clamp(8rem, 20vw, 15rem)'} variant='solid' bgColor={'#f9c150'} colorScheme='yellow' borderRadius={'30px'} color={'white'}>
                      Daftar
                    </Button>
                  </ButtonGroup>
                </Box>
              </Grid>
            </form>
          </Box>
        </Container>
      </Center>
    </Box>
  );
}
