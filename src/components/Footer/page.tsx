import { Box, HStack, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box zIndex={100} bgColor={'#0055B8'}>
      <Image w={'100%'} h={{base: '150px', md: '200px', lg: '400px'}} src={'/assets/background/footer.png'} alt={'Background'} />
      <Box mt={{base: '-5rem', md: '-15rem'}} bgColor={'#234990'} color={'#ffffff'} py={10} px={{ base: 10, md: 20, '2xl': '200px' }}>
        <Text mb={5}>Home /</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
          <Box display='flex' flexDirection='column'>
            <Text mb={5} mt={{ base: 10, lg: 0 }} fontWeight={600}>
              Kelas Pintar Indonesia
            </Text>

            <Box>
              <Text>Satrio Tower Building 18th floor Kuningan</Text>
              <HStack>
                <Link href={'mailto:sobat@kelaspintar.id'}>sobat@kelaspintar.id</Link>
                <Link href={'https://wa.me/+6281513003999'}>021 4040 3999</Link>
              </HStack>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Text mb={5} mt={{ base: 10, lg: 0 }} fontWeight={600}>
              Solusi Belajar
            </Text>
            <Box display='flex' flexDirection='row' gap={10}>
              <VStack align='stretch'>
                <Link href={'https://www.kelaspintar.id/kelaspintar'}>Kelas Pintar</Link>
                <Link href={'https://www.kelaspintar.id/tanya-dari-kelaspintar'}>TANYA</Link>
                <Link href={'https://www.kelaspintar.id/soal-dari-kelaspintar'}>SOAL</Link>
                <Link href={'https://www.kelaspintar.id/guru-dari-kelaspintar'}>GURU</Link>
                <Link href={'https://www.kelaspintar.id/ptn-kelaspintar'}>PTN</Link>
              </VStack>
              <VStack align='stretch'>
                <Link href={'https://www.kelaspintar.id/solusi-guru'}>Untuk Guru</Link>
                <Link href={'https://www.kelaspintar.id/solusi-orang-tua'}>Untuk Orang Tua</Link>
              </VStack>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Text mb={5} mt={{ base: 10, lg: 0 }} fontWeight={600}>
              Tentang Kami
            </Text>
            <Box display='flex' flexDirection='row' gap={10}>
              <VStack align='stretch'>
                <Link href={'https://www.kelaspintar.id/extramarks-indonesia'}>Extramarks Indonesia</Link>
                <Link href={'https://www.kelaspintar.id/blog'}>Blog</Link>
                <Link href={'https://www.kelaspintar.id/bantuan'}>Bantuan</Link>
                <Link href={'#'}>Karir</Link>
              </VStack>
              <VStack align='stretch'>
                <Link href={'https://www.kelaspintar.id/hubungi-kami'}>Hubungi Kami</Link>
                <Link href={'https://www.kelaspintar.id/partnership'}>Partnership</Link>
                <Link href={'https://www.kelaspintar.id/terms-of-use'}>Syarat & Ketentuan</Link>
                <Link href={'https://www.kelaspintar.id/privacy-policy'}>Kebijakan Privasi</Link>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
