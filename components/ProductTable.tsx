/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import {
  Box,
  Checkbox,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Pagination,
  Switch,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export type Column<T> = {
  label: string;
  field: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type ProductTableProps<T extends { id: number; status: boolean }> = {
  title?: string;
  data: T[];
  columns: Column<T>[];
  rowsPerPageOptions?: number[];
};

export default function ProductTable<T extends { id: number; status: boolean }>({
  title = 'Data Table',
  data = [],
  columns = [],
  rowsPerPageOptions = [10, 25, 50],
}: ProductTableProps<T>) {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(rowsPerPageOptions[0]);
  const [search, setSearch] = useState('');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [switchStates, setSwitchStates] = useState(
    Object.fromEntries(data.map((item) => [item.id, item.status]))
  );

  const handleSwitchChange = (id: number, checked: boolean) => {
    setSwitchStates((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const filteredRows = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const pageCount = Math.ceil(filteredRows.length / rowsPerPage);
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box
      sx={{
        backgroundColor: '#EDEFF6',
        minHeight: '100vh',
        padding: { xs: '24px 0 0 0 ', sm:'20px', md: '24px 24px 24px 35px' },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
            marginBottom: '24px',
            paddingLeft: {
            xs: '16px',
            md: 0,
            },
            display: {
            xs: 'block',
            md: 'flex',
            },
        }}
        >
        {title && (
          <Typography variant="h3" mb={2}>
            {title}
          </Typography>
        )}

        <Box display="flex" gap={2}>
          <Button variant="outlined">Mark as Bestseller</Button>
          <Button variant="outlined">Mark Inactive</Button>
        </Box>
      </Box>

      <Paper elevation={0} sx={{ borderRadius: 0 }}>
        <Box sx={{ padding: '16px' }}>
          <TextField
            placeholder="Search"
            size="small"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { backgroundColor: 'white', width: '300px' },
            }}
          />
        </Box>

        {/* Responsive Table Container */}
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Box>
            <Table size="small" sx={{overflow:'auto'}}>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell key={String(col.field)}>{col.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow
                    key={row.id}
                    hover
                    sx={{ height: 56 }}
                    onClick={() => setSelectedRow(row.id)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>

                    {columns.map((col) => (
                      <TableCell
                        key={String(col.field)}
                        sx={
                          col.field === 'status'
                            ? { minWidth: 160, width: 160 }
                            : undefined
                        }
                      >
                        {col.field === 'status' ? (
                          <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                            minHeight={32}
                          >
                            <Box
                              width={32}
                              display="flex"
                              justifyContent="center"
                            >
                              <Switch
                                checked={switchStates[row.id]}
                                onChange={(e) =>
                                  handleSwitchChange(row.id, e.target.checked)
                                }
                                onClick={(e) => e.stopPropagation()}
                                onMouseDown={(e) => e.stopPropagation()}
                              />
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 700,
                                color: switchStates[row.id]
                                  ? '#259924'
                                  : '#999',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {switchStates[row.id] ? 'Active' : 'Inactive'}
                            </Typography>
                          </Box>
                        ) : col.render ? (
                          col.render(row[col.field], row)
                        ) : (
                          String(row[col.field])
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>

        <Box display="flex" justifyContent="flex-end" p={2}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, value) => setPage(value)}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Box>
      </Paper>
    </Box>
  );
}
