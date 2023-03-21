'use client';
import React from 'react';
import Register from '@/components/Register/page';
import { Box } from '@chakra-ui/react';
import Footer from "@/components/Footer/page";

export default function LandingPage() {
  return (
    <Box minH='100vh'>
      <Register />
      <Footer />
    </Box>
  );
}
