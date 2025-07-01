'use client';

import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { Bell, User } from 'lucide-react';

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        borderBottom: '1px solid #e0e0e0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        top: 0,
        zIndex: 3,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" sx={{pl: { xs:'50px', md: '40px', sm: '40px',  lg: 0 },}}>
          <Image
            src="/logo.svg"
            alt="AVD Logo"
            width={90}
            height={36}
            priority
            style={{ marginTop: '10px' }}
          />
        </Box>

        <Box display="flex" gap={2} alignItems="center">
          <IconButton>
            <Bell size={20} color="#222" />
          </IconButton>
          <IconButton>
            <User size={22} color="#222" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
