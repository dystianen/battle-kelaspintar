'use client';
import React, { useRef } from 'react';
import Register from '@/components/Register/page';
import { Box } from '@chakra-ui/react';
import Footer from "@/components/Footer/page";
import Header from '@/components/Header/page';
import Hero from '@/components/Hero/page';
import Reward from '@/components/Reward/page';
import Procedure from '@/components/Procedure/page';

export default function LandingPage() {
  const myRef = useRef<HTMLInputElement>(null);

  function toRegister() {
    if (myRef.current != null) {
      window.scrollTo({
        top: myRef.current.offsetTop,
        behavior: 'smooth' 
      });
    }
  }

  return (
    <Box minH='100vh'>
      <Header />
      <Hero handleRegister={toRegister}/>
      <Reward />
      <Procedure />
      <Register registerRef={myRef}/>
      <Footer />
    </Box>
  );
}
