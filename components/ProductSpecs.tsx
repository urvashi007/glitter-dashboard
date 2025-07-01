'use client';
import { Box, Typography, Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import theme from '../utils/theme';

const specs1 = [
  ['Metal Type', '14KT WHITE GOLD'],
  ['Est. Metal weight', '15.00'],
  ['Sidestones Total Weight (Ct)', '15.00'],
  ['Number of Sidestones', '15.00'],
  ['Pendant Width', '15.00'],
  ['Pendant Diameter', '15.00'],
  ['Additional Stones (Not Supplied)', '15.00'],
];

const specs2 = [
  ['Metal Type', '14KT WHITE GOLD'],
  ['Recommended diamond shapes', '15.00'],
  ['Sidestone Color and Quality', '15.00'],
  ['Pendant Height', '15.00'],
  ['Pendant Length', '15.00'],
  ['Supplied Sidestones', '15.00'],
];

function renderTable(data: string[][]) {
  return (
    <Table size="small">
      <TableBody>
        {data.map(([label, value]) => (
          <TableRow key={label}>
            <TableCell sx={{color:'#222', fontWeight:'500'}}>{label}</TableCell>
            <TableCell sx={{color:'#222', fontWeight:'500'}} align="right">{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function ProductSpecs() {
  return (
    <Box sx={{ ...theme.mixins.pageLayout }}>
   

      <Paper sx={{ p: 2 }}>
      <Typography variant="subtitle1" mb={2} sx={{fontSize:'16px', paddingLeft:'10px', fontWeight:'500'}}>
        Specification And Description
      </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={3}
        >
          <Box flex={1} sx={{color:'#222'}}>{renderTable(specs1)}</Box>
          <Box flex={1}>{renderTable(specs2)}</Box>
        </Box>
      </Paper>
    </Box>
  );
}
