'use client';

import { Pagination, Box } from '@mui/material';

interface CustomPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function CustomPagination({
  count,
  page,
  onChange,
}: CustomPaginationProps) {
  return (
    <Box display="flex" justifyContent="center" p={3}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        variant="outlined"
        shape="rounded"
        color="primary"
        sx={{
          '& .MuiPagination-ul': {
            justifyContent: 'center',
            gap: '12px',
          },
          '& .MuiPaginationItem-root': {
            border: '1px solid #ccc',
            borderRadius: '0px',
            width: '48px',
            height: '48px',
            minWidth: '48px',
            fontWeight: 500,
            color: '#000',
          },
          '& .Mui-selected': {
            backgroundColor: '#3f51b5',
            color: '#fff',
            borderColor: '#3f51b5',
          },
          '& .MuiPaginationItem-icon': {
            fontSize: '20px',
          },
        }}
      />
    </Box>
  );
}
