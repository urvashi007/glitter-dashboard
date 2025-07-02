/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  MenuItem,
  Select,
  OutlinedInput,
} from "@mui/material";
import { ChevronDown, Upload } from "lucide-react";
import { useRef, useState } from "react";

const LabeledInput = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Box>
    <Typography
      mb={0.5}
      fontWeight={500}
      fontSize={14}
      sx={{ fontFamily: "Jost" }}
    >
      {label}
    </Typography>
    {children}
  </Box>
);

const CustomSelect = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange?: (e: any) => void;
}) => {
  const id = label.toLowerCase().replace(/\s+/g, "-") + "-select";
  const labelId = label.toLowerCase().replace(/\s+/g, "-") + "-label";

  return (
    <LabeledInput label={label}>
      <Select
        size="small"
        labelId={labelId}
        id={id}
        value={value}
        onChange={onChange}
        IconComponent={ChevronDown}
        fullWidth
        input={<OutlinedInput notched={false} />}
      >
        <MenuItem value={value}>{value}</MenuItem>
      </Select>
    </LabeledInput>
  );
};

export default function CustomerProfileForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#F1F3F8" }}>
      <Typography
        variant="h3"
        fontWeight={600}
        mb={3}
        sx={{ fontSize: "24px", fontWeight: "700" }}
      >
        View Customer Profile
      </Typography>

      {/* Profile Info */}
      <Box bgcolor="#fff" p={3} borderRadius={2} mb={3}>
        <Typography
          variant="subtitle1"
          fontWeight={700}
          mb={2}
          sx={{ background: "#F5F7F9", p: 1 }}
        >
          Profile Info
        </Typography>

        <Box
          display="grid"
          gap={2}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        >
          <LabeledInput label="First Name">
            <TextField defaultValue="Enter your Name" fullWidth size="small" />
          </LabeledInput>
          <LabeledInput label="Last Name">
            <TextField defaultValue="Enter your Last Name" fullWidth size="small" />
          </LabeledInput>
          <LabeledInput label="Name of Entity">
            <TextField
              defaultValue="Name of Entity"
              fullWidth
              size="small"
            />
          </LabeledInput>
          <CustomSelect label="Entity" value="Retailer" />
        </Box>

        {/* Mobile + Email */}
        <Box
          mt={2}
          display="grid"
          gap={2}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        >
          <LabeledInput label="Mobile Number">
            <Box display="flex" width="100%">
              <Select
                size="small"
                value="+91"
                IconComponent={ChevronDown}
                sx={{
                  minWidth: "90px",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  marginRight: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              >
                <MenuItem value="+91">+91</MenuItem>
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+44">+44</MenuItem>
              </Select>
              <TextField
                defaultValue="Enter Number"
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  },
                }}
              />
            </Box>
          </LabeledInput>

          <LabeledInput label="Email">
            <TextField
              defaultValue="Enter Your Email"
              fullWidth
              size="small"
            />
          </LabeledInput>
        </Box>

        {/* Country, State, City, Post Code */}
        <Box
          mt={2}
          display="grid"
          gap={2}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr 1fr" }}
        >
          <CustomSelect label="Country" value="Country" />
          <CustomSelect label="State" value="State" />
          <CustomSelect label="City" value="City" />
          <LabeledInput label="Post Code">
            <TextField defaultValue="Post Code" fullWidth size="small" />
          </LabeledInput>
        </Box>

        {/* PAN, GST, Upload */}
        <Box
          mt={2}
          display="grid"
          gap={2}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
        >
          <LabeledInput label="PAN No.">
            <TextField defaultValue="PAN No." fullWidth size="small" />
          </LabeledInput>
          <LabeledInput label="GST No.">
            <TextField defaultValue="GST No." fullWidth size="small" />
          </LabeledInput>
          <Box>
            <Typography
              mb={0.5}
              fontWeight={500}
              fontSize={14}
              sx={{ fontFamily: "Jost" }}
            >
              Upload Aadhar / PAN
            </Typography>
            <Box
              onClick={() => fileInputRef.current?.click()}
              sx={{
                border: "1px dashed #ccc",
                borderRadius: 1,
                p: 2,
                height: 56,
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#888",
                cursor: "pointer",
                bgcolor: "#fafafa",
              }}
            >
              <Upload size={16} />
              <Typography fontSize={13}>
                Upload Any Of Above Documents
              </Typography>
              {uploadedFile && (
                <Chip
                  label={uploadedFile.name}
                  size="small"
                  onDelete={() => setUploadedFile(null)}
                />
              )}
            </Box>
            <input
              type="file"
              accept="image/*,application/pdf"
              ref={fileInputRef}
              onChange={handleFileChange}
              hidden
            />
          </Box>
        </Box>

        {/* Address */}
        <Box mt={3}>
          <LabeledInput label="Address">
            <TextField
              multiline
              rows={2}
              fullWidth
              size="small"
              defaultValue="Enter Your Adress"
            />
          </LabeledInput>
        </Box>
      </Box>

      {/* Configure Info */}
      <Box bgcolor="#fff" p={3} borderRadius={2} mb={3}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          mb={2}
          sx={{ background: "#F5F7F9", p: 1 }}
        >
          Configure Info
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={2}
        >
          <CustomSelect label="Company" value="Value" />
        </Box>
      </Box>

      {/* Update Button */}
      <Box textAlign="right">
        <Button
          variant="contained"
          sx={{
            background: "#445B9C",
            color: "#fff",
            borderRadius: "0",
            minWidth: "122px",
            height: "48px",
            fontWeight: "500",
            fontFamily: "jost",
            fontSize: "16px",
          }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}
