'use client';

import { Tabs, Tab } from '@mui/material';

interface CmsTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const tabItems = ['About Us', 'Policies', 'Blogs','Services','Enquiry'];

export default function CmsTabs({ value, onChange }: CmsTabsProps) {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      TabIndicatorProps={{
        style: { backgroundColor: '#6179BC' },
      }}
      sx={{
        bgcolor: '#fff',
        mb: 2,
        '& .MuiTab-root': {
          textTransform: 'none',
          fontWeight: 500,
          color: '#222',
        },
        '& .Mui-selected': {
          color: '#6179BC !important',
          fontWeight: 700,
        },
      }}
    >
      {tabItems.map((label, idx) => (
        <Tab
          key={label}
          label={label}
          sx={{
            borderBottom: value === idx ? '2px solid #6179BC' : 'none',
            transition: 'color 0.3s',
          }}
        />
      ))}
    </Tabs>
  );
}
