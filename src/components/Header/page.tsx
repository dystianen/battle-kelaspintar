import { Box, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box bg={'#f9c150'} py={15} px={10}>
      <Image w={'120px'} h={'53px'} src='/assets/logo/logo-white-kp.png' alt='Kelas Pintar' />
    </Box>
  );
}
