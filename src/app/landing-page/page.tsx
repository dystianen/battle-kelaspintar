'use client';
import React from 'react';
import Register from '@/components/Register/page';
import { Box } from '@chakra-ui/react';

export default function LandingPage() {
  return (
    <Box minH='100vh' bgColor={'#E3EEFF'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Register />
    </Box>
  );
}
