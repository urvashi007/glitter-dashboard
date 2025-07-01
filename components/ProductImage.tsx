/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, LinearProgress, IconButton } from '@mui/material';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const images = [
  '/jwllry.jpg',
  '/jwllry.jpg',
  '/jwllry.jpg',
];

export default function ProductImage() {
  const [progress, setProgress] = useState(0);

  return (
    <Box
      sx={{
        borderRadius: 2,
        p: 2,
        position: 'relative',
        overflow: 'hidden',
        '&:hover .nav-btn': {
          opacity: 1,
        },
      }}
    >
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={10}
        onSlideChange={({ activeIndex }) =>
          setProgress(((activeIndex + 1) / images.length) * 100)
        }
        style={{ width: '100%' }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Product ${idx + 1}`}
              style={{
                width: '214px',
                height: '280px',
                objectFit: 'cover',
                borderRadius: 8,
                maxWidth:'100%',
                margin: '0 auto',
                display:'block',
            
                
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton
        className="swiper-button-prev-custom nav-btn"
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          transform: 'translateY(-50%)',
          bgcolor: 'white',
          boxShadow: 1,
          zIndex: 10,
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        className="swiper-button-next-custom nav-btn"
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          transform: 'translateY(-50%)',
          bgcolor: 'white',
          boxShadow: 1,
          zIndex: 10,
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Progress Bar */}
      <Box mt={2} display="flex" justifyContent="center">
  <LinearProgress
    variant="determinate"
    value={progress}
    sx={{
      width: '120px',
      height: 4,
      borderRadius: 4,
      backgroundColor: '#ebebeb',
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#445B9C',
      },
    }}
  />
</Box>

    </Box>
  );
}
