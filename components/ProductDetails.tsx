'use client';
import { Box, Typography } from '@mui/material';

const productData = {
  product: {
    code: 'BGL230',
    specs: {
      goldWt: '0.051',
      diaWt: '0.051',
    },
    note: `*All item(s) weights and prices are approximate. Items displayed weight and price are based on the item's stock finger size. Any and all items which are ordered in a specific finger size will incur an increase or decrease in metal weight which is NOT reflected in the estimate price. This disclaimer applies for all items ordered in custom sizes.,*All item(s) weights and prices are approximate. Items displayed weight and price are based on the item's stock finger size. Any and all items which are ordered in a specific finger size will incur an increase or decrease in metal weight which is NOT reflected in the estimate price. This disclaimer applies for all items ordered in custom sizes.*All item(s) weights and prices are approximate. Items displayed weight and price are based on the item's stock finger size. Any and all items which are ordered in a specific finger size will incur an increase or decrease in metal weight which is NOT reflected in the estimate price. This disclaimer applies for all items ordered in custom sizes. `,
  },
};

export default function ProductDetails() {
  const { code, specs, note } = productData.product;

  return (
    <Box>
      <Typography fontWeight={600} variant="h6" mb={1}>
        {code}
      </Typography>
      <Typography variant="body2" mb={1}>
        <strong>Gold WT:</strong> {specs.goldWt}&nbsp;&nbsp;&nbsp;
        <strong>Dia WT:</strong> {specs.diaWt}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize:'14px', fontWeight:'400',marginTop:'20px', fontFamily:"jost"}}>
        {note}
      </Typography>
    </Box>
  );
}
