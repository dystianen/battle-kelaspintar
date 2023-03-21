'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'
import styles from './page.module.css'
import Footer from "@/components/Footer/page";
import React from "react";

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <CacheProvider>
        <ChakraProvider>
          {children}
          <Footer />
        </ChakraProvider>
      </CacheProvider>
    </body>
    </html>
  )
}
