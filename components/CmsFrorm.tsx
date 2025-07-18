'use client';

import {
  Box,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import UploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Close';
import CmsTabs from './tabs';

export default function CmsForm() {
  const [tab, setTab] = useState(0);
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  return (
    <Box sx={{ bgcolor: '#f1f3f9', minHeight: '100vh', p: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        CMS
      </Typography>

      {/* Tabs */}
      <CmsTabs value={tab} onChange={(_, val) => setTab(val)} />

      {/* Tab Content */}
      {tab === 0 ? (
        <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 1, mt: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            TITLE
          </Typography>
          <TextField fullWidth placeholder="About Us" sx={{ mb: 3 }} />

          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            CONTENT
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Lorem Ipsum"
            sx={{ mb: 3 }}
          />

          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Image
          </Typography>
          <Box
            sx={{
              border: '2px dashed #bdbdbd',
              borderRadius: 1,
              py: 1,
              px: 2,
              textAlign: 'center',
              cursor: 'pointer',
              position: 'relative',
              height: '48px',
              width: '50%',
              mb: 2,
            }}
          >
            <input
              accept="image/*"
              type="file"
              id="image-upload"
              multiple
              style={{ display: 'none' }}
              onChange={handleFileChange}
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

          {/* Preview list */}
          <Box display="flex" flexWrap="wrap" gap={1}>
            {images.map((file, i) => (
              <Box
                key={i}
                display="flex"
                alignItems="center"
                gap={1}
                px={1.5}
                py={0.5}
                border="1px solid #e0e0e0"
                borderRadius={1}
                bgcolor="#f5f5f5"
              >
                <ImageIcon fontSize="small" />
                <Typography variant="body2">{file.name}</Typography>
                <IconButton
                  size="small"
                  onClick={() =>
                    setImages(images.filter((_, index) => index !== i))
                  }
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            bgcolor: '#fff',
            p: 3,
            borderRadius: 1,
            mt: 2,
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Content for tab {tab + 1} will go here.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
