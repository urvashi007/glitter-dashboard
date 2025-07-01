'use client';

import { Box, } from '@mui/material';
import { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { Product, products } from '../../utils/products';


import CustomerProfileForm from '../../components/CustomerProfileForm';

export default function HomePage() {
  const [] = useState<Product[]>(products);



  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Box display="flex" flexGrow={1} >
      <Box
          borderRight="1px solid #e0e0e0"
          sx={{
            bgcolor: '#445B9C',
            
            width: {
              xs: 0,
              md: 252,
            },
          }}
        >
          <Sidebar />
        </Box>
        <Box flexGrow={1} sx={{overflowX: 'auto'}}>

          <CustomerProfileForm />
        </Box>
      </Box>
    </Box>
  );
}
