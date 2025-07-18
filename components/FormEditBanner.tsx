/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Paper,
  InputAdornment
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import ImageIcon from '@mui/icons-material/Image'; // for the image icon
import FooterActions from './FooterActions';

export default function FormEditSection() {
  const [image, setImage] = useState<File | null>(null);
  const [link, setLink] = useState('http://191472587/Dashboard?tracking_source=search_projects/dashboard');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography
        variant="h3"
        fontWeight={600}
        mb={3}
        sx={{ fontSize: '24px', fontWeight: '700' }}
      >
        View Customer Profile
      </Typography>
      <Box sx={{ p: 4, mx: 'auto', bgcolor: '#fff' }}>
        {/* TITLE */}
        <Typography variant="subtitle2" gutterBottom>TITLE</Typography>
        <TextField fullWidth placeholder='Enter Title'/>

        {/* TAGLINE */}
        <Typography variant="subtitle2" sx={{ mt: 3 }} gutterBottom>TAGLINE</Typography>
        <TextField fullWidth multiline minRows={3} placeholder='Enter TagLine' />

        {/* IMAGE UPLOAD */}
        <Typography variant="subtitle2" sx={{ mt: 3 }} gutterBottom>Image</Typography>
        <Box
          sx={{
            border: '2px dashed #bdbdbd',
            borderRadius: 1,
            paddingTop: "10px",
            px: 2,
            textAlign: 'center',
            cursor: 'pointer',
            position: 'relative',
            height: "48px",
            width:'50%'
          }}
        >
          <input
            accept="image/*"
            type="file"
            id="image-upload"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
            <Box
              display="inline-flex"
              alignItems="center"
              gap={1}
              justifyContent="center"
              color="text.secondary"
            >
              <UploadIcon fontSize="small" />
              <Typography variant="body2">Upload Image</Typography>
            </Box>
          </label>
        </Box>

        {image && (
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              mt: 2,
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              backgroundColor: '#f5f5f5',
              border: '1px solid #e0e0e0',

            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <ImageIcon fontSize="small" />
              <Typography variant="body2" fontSize="14px">{image.name}</Typography>
              <IconButton size="small" onClick={handleImageRemove}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        )}

        {/* LINK */}
        <Typography variant="subtitle2" sx={{ mt: 3 }} gutterBottom>LINK</Typography>
<TextField
  fullWidth
  placeholder="Copy Link Here"
  
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton edge="end">
          <AddIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
/>


        <Paper
          sx={{
            mt: 1,
            padding: "0 10px",
            backgroundColor: '#6179BC4D',
            display: 'flex',
            boxShadow:'none',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius:'0'
          }}
        >
          <Typography variant="body2" sx={{ wordBreak: 'break-all',color:"#222" }}>{link}</Typography>
          <IconButton onClick={handleCopyLink} sx={{padding:'10px',color:"#222"}}>
            <ContentCopyIcon  fontSize="small" />
          </IconButton>
        </Paper>

        {/* SEQUENCE */}
        <Typography variant="subtitle2" sx={{ mt: 3 }} gutterBottom>SEQUENCE</Typography>
        <TextField fullWidth defaultValue="1" />
      </Box>
      <FooterActions />
    </Box>
  );
}
