'use client';
import React from 'react';
import Register from '@/components/register/page';
import { Box} from '@chakra-ui/react';

export default function LandingPage() {
  return (
    <Box minH='100vh' bgColor={'#E3EE'} display={'flex'} flexDirection='column' alignItems={'center'}>
    {/* <Box minH='100vh' w='100vw' bgColor={'#E3EEFF'} display={'flex'} justifyContent={'center'}> */}
      {/* <Box display={'flex'} flexDirection='column' alignItems={'center'}> */}
        <Register />
      {/* </Box> */}
    </Box>
  );
}
