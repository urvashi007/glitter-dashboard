'use client';

import { Box, IconButton, Switch, Typography } from '@mui/material';
import { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ProductTable, { Column } from '../../components/ProductTable';
import { Product, products } from '../../utils/products';
import Image from 'next/image';

export default function HomePage() {
  const [productData, setProductData] = useState<Product[]>(products);

  const handleToggleStatus = (id: number) => {
    setProductData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const columns: Column<Product>[] = [
    { label: 'Product ID', field: 'productId' },
    { label: 'Product Name', field: 'name' },
    { label: 'Gold WT', field: 'goldWt' },
    { label: 'Dia WT', field: 'diaWt' },
    { label: 'Category', field: 'category' },
    {
      label: 'Status',
      field: 'status',
      render: (_value, row) => (
        <Box display="flex" alignItems="center" gap={1} sx={{ minWidth: 140 }}>
          <Switch
            size="small"
            checked={row.status}
            onChange={() => handleToggleStatus(row.id)}
          />
          <Typography
            variant="body2"
            sx={{ width: 70, display: 'inline-block' }}
          >
            {row.status ? 'Active' : 'Inactive'}
          </Typography>
        </Box>
      ),
    },
    {
      label: 'Action',
      field: 'id',
      render: (_value, row) => (
        <IconButton size="small" onClick={() => alert(`View ${row.productId}`)}>
          <Image src='/eye.svg' width={19} height={19}  alt='eye'/>
        </IconButton>
      ),
    },
  ];

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Box display="flex" flexGrow={1} >
      <Box
          borderRight="1px solid #e0e0e0"
          sx={{
            width: {
              xs: 0,
              md: 240,
            },
          }}
        >
          <Sidebar />
        </Box>
        <Box flexGrow={1} sx={{overflowX: 'auto'}}>
          <ProductTable title="Products" data={productData} columns={columns} />
          
        </Box>
      </Box>
    </Box>
  );
}
