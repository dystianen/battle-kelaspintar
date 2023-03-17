"use client"
import React from 'react';
import Register from "@/components/register/page";
import { Box } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <Box h='100vh' display='flex' alignItems='center' justifyContent='center'>
      <Register />
    </Box>
  )
}