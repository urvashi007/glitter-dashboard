/* eslint-disable @next/next/no-img-element */
'use client';

import {
  Box,
  Typography,
  Paper,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FooterActions from './FooterActions';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductSpecs from './ProductSpecs';

export default function ViewProductPage() {
  return (
    <Box sx={{ background: '#f6f7fb', px: { xs: 2, md: 5 }, py: 4,}}>

      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <ArrowBackIosNewIcon fontSize="small" />
        <Typography variant="h5" fontWeight={600}>
          View Product
        </Typography>
      </Box>


      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>

      <Box
        sx={{
          background: '#fff',
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          width: { xs: 'auto', md: '50%' },
        }}
>
        <ProductImage />
        </Box>


        <Box flex={1} sx={{ background: '#fff', p: 2 }}>
         <ProductDetails />
        </Box>
      </Box>


      <Box mt={2} >
        <Paper elevation={0} sx={{ overflowX: 'auto' }}>

            <ProductSpecs />

        </Paper>
      </Box>

      <FooterActions />
    </Box>
  );
}



