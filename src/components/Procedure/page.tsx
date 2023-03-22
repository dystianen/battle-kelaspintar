import { Box, Center, SimpleGrid, Text, VStack, Icon, Flex, Image } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Procedure() {
  return (
    <Box minH={{base: '30vh', md: '80vh'}} position={'relative'}>
      <Center mx={'5em'} mt={{base: '4rem', md: '2em'}}>
        <VStack>
          <Text color={'#0055B8'} fontSize={'clamp(16px, 5vw, 40px)'} fontWeight={600}>
            Cara Ikutan
          </Text>

          <Flex gap={{base: '5px', md: '10px'}}>
            <VStack>
              <Flex w={{base: '100px', md: '250px', lg: '300px'}} h={{base: '100px', md: '250px', lg: '300px'}} bgColor={'#0055B8'} borderRadius={{base: '10px', md: '25px'}} border={'4px solid #F9C151'} alignItems={'center'} justifyContent={'center'}>
                <Image w={{base: '70px', md: '200px'}} src={'/assets/images/procedure-1.png'} alt={'Procedure'} />
              </Flex>
              <Text pt={'20px'} px={{base: 0, lg: '3rem'}} fontSize={{base: '8px', md: '14px', lg: '16px'}} color={'#0055B8'} textAlign={'center'}>
                <span style={{ fontWeight: '700' }}>Daftar Battle Pintar SNBT 2023</span> dengan akun Kelas Pintar pada periode <span style={{ fontWeight: '700' }}>23 Maret - 2 April 2023</span>
              </Text>
            </VStack>
            <Icon as={AiOutlineArrowRight} mt={{base: '3rem', md: '8rem'}} color={'#0055B8'} fontSize={{base: '14px', md: '20px'}}/>
            <VStack>
              <Flex w={{base: '100px', md: '250px', lg: '300px'}} h={{base: '100px', md: '250px', lg: '300px'}} bgColor={'#0055B8'} borderRadius={{base: '10px', md: '25px'}} border={'4px solid #F9C151'} alignItems={'center'} justifyContent={'center'}>
                <Image mt={{base: '12px', md: '30px'}} w={{base: '70px', md: '200px'}} src={'/assets/images/procedure-2.png'} alt={'Procedure'} />
              </Flex>
              <Text pt={'20px'} px={{base: 0, lg: '3rem'}} fontSize={{base: '8px', md: '14px', lg: '16px'}} color={'#0055B8'} textAlign={'center'}>
                <span style={{ fontWeight: '700' }}>Kerjakan soal Battle Pintar SNBT 2023</span> dengan kemampuan terbaik pada periode <span style={{ fontWeight: '700' }}>3 - 9 April 2023</span>
              </Text>
            </VStack>
            <Icon as={AiOutlineArrowRight} mt={{base: '3rem', md: '8rem'}} color={'#0055B8'} fontSize={{base: '14px', md: '20px'}}/>
            <VStack>
              <Flex w={{base: '100px', md: '250px', lg: '300px'}} h={{base: '100px', md: '250px', lg: '300px'}} bgColor={'#0055B8'} borderRadius={{base: '10px', md: '25px'}} border={'4px solid #F9C151'} alignItems={'center'} justifyContent={'center'}>
                <Image w={{base: '70px', md: '200px'}} src={'/assets/images/procedure-3.png'} alt={'Procedure'} />
              </Flex>
              <Text pt={'20px'} px={{base: 0, lg: '3rem'}} fontSize={{base: '8px', md: '14px', lg: '16px'}} color={'#0055B8'} textAlign={'center'}>
                <span style={{ fontWeight: '700' }}>10 orang</span> dengan nilai terbaik akan <span style={{ fontWeight: '700' }}>mendapatkan hadiah</span> yang diumumkan pada <span style={{ fontWeight: '700' }}>11 April 2023</span>
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
}
