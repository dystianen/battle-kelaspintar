import { Box, Center, Image, Text, VStack } from '@chakra-ui/react';

export default function Reward() {
  console.log('test build')
  return (
    <Box minH={{base: '40vh', md: '120vh'}} w={'100vw'} bgColor={'#f9c150'} position={'relative'}>
      <Image zIndex={1} position={'absolute'} w={'100%'} h={'100%'} src='/assets/background/reward.png' alt='Kelas Pintar' />

      <Center zIndex={10} position={'absolute'} w={'100%'} pt={{base: '2rem', md: '5rem'}}>
        <VStack w={'100%'} spacing={{base: 0, md: 10}}>
          <hr style={{ width: '70%', textAlign: 'center', border: '2px solid white' }} />
          <Box textAlign={'center'}>
            <Text pt={'1rem'} fontSize={'clamp(16px, 5vw, 40px)'} fontWeight={'600'}>
              Menangkan Hadiah Total
            </Text>
            <Box mt={'5px'} bgColor={'#0055B8'} px={'1rem'} borderRadius={'10px'} border={'4px solid white'} textAlign={'center'}>
              <Text fontSize={'clamp(16px, 5vw, 40px)'} fontWeight={'600'}>
                Puluhan Juta Rupiah
              </Text>
            </Box>
          </Box>
          <Image pt={{base: '20px', md: 0}} w={{base: '400px', lg: '800px'}} h={{base: '225px', lg: '450px'}} src='/assets/images/rank.png' alt='Kelas Pintar' />
        </VStack>
      </Center>
    </Box>
  );
}
