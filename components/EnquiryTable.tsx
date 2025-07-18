'use client';

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface EnquiryData {
  name: string;
  email: string;
  mobile: string;
  company: string;
  productCategory: string;
  details: string;
}

const data: EnquiryData[] = [
  {
    name: "Bessie Cooper",
    email: "michelle.rivera@example.com",
    mobile: "0853224930",
    company: "MasterCard",
    productCategory: "Casting Services",
    details:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...",
  },
  {
    name: "Jacob Jones",
    email: "debra.holt@example.com",
    mobile: "0612353892",
    company: "Nintendo",
    productCategory: "Finished Jewelry",
    details:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...",
  },
  {
    name: "Jane Cooper",
    email: "deanna.curtis@example.com",
    mobile: "0891238957",
    company: "Louis Vuitton",
    productCategory: "New Model CAD Customization",
    details:
      "Lorem Ipsum has its roots in classical Latin literature from 45 BC, making it over 2000 years old...",
  },
];

const EnquiryTable: React.FC = () => {
  const [openRow, setOpenRow] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // true for screen < 600px

  const handleToggle = (index: number) => {
    setOpenRow((prev) => (prev === index ? null : index));
  };

  return (
     <Box sx={{ p: 4, mx: 'auto', }}>
        <Typography
        variant="h3"
        fontWeight={600}
        mb={3}
        sx={{ fontSize: '24px', fontWeight: '700' }}
      >
       Enquiry
      </Typography>
    <Box sx={{ width: "100%", overflowX: "auto",  }}>
      <TableContainer component={Paper} sx={{ minWidth: 600 ,padding:'16px', borderRadius: '0'}}>
        <Table aria-label="enquiry table"  sx={{
    borderCollapse: "collapse",
    "& .MuiTableCell-root": {
      borderBottom: "0.5px solid #e0e0e0",
    },
  }}>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Product Category</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: isMobile ? "0.75rem" : "inherit", fontWeight:'600' }}
                    >
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: isMobile ? "0.75rem" : "inherit" ,fontWeight:'600'}}
                    >
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: isMobile ? "0.75rem" : "inherit",fontWeight:'600' }}
                    >
                      {row.mobile}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: isMobile ? "0.75rem" : "inherit",fontWeight:'600' }}
                    >
                      {row.company}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: isMobile ? "0.75rem" : "inherit",fontWeight:'600' }}
                    >
                      {row.productCategory}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleToggle(index)}
                    >
                      {openRow === index ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={openRow === index} timeout="auto" unmountOnExit>
                    <Box
                    sx={{
                      background: '#F7F7F7',
                      p: '12px',
                      m: '0 -12px',
                     
                    }}
                  >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: isMobile ? "0.75rem" : "0.9rem",  fontFamily:'jost', }}
                        >
                          {row.details}
                        </Typography>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Box>
  );
};

export default EnquiryTable;
