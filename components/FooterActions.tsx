'use client';

import { Box, Button, Checkbox, FormControlLabel } from '@mui/material';

interface FooterActionsProps {
  showCheckbox?: boolean;
  showCancel?: boolean;
}

export default function FooterActions({
  showCheckbox = true,
  showCancel = true,
}: FooterActionsProps) {
  return (
    <Box
      sx={{
        position: {
          xs: 'static',
          md: 'fixed',
        },
        bottom: 0,
        left: { xs: 0, md: '252px' },
        right: 0,
        zIndex: 1300,
        backgroundColor: '#fff',
        borderTop: '1px solid #ddd',
        boxShadow: {
          xs: 'none',
          md: '0 -2px 4px rgba(0,0,0,0.05)',
        },
        px: { xs: 2, md: 4 },
        py: 2,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      
        mt: 2,
      }}
    >
      {showCheckbox ? (
        <Box display="flex" gap={2} flexWrap="wrap">
          <FormControlLabel control={<Checkbox defaultChecked />} label="Is Active" />
        </Box>
      ) : (
        <span />
      )}

      <Box display="flex" gap={2} mt={{ xs: 5, md: 0, }}>
        {showCancel && <Button variant="outlined" sx={{  minWidth:'120px',
            height:'48px',}}>Cancel</Button>}
        <Button
          variant="contained"
          sx={{
            background: '#445B9C',
            color: '#fff',
            fontFamily: 'jost',
            minWidth:'120px',
            height:'48px',
            borderRadius: 0,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
