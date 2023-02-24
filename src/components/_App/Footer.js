import React from "react";
import { Stack, Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#fff",
          p: "25px",
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography>
            Copyright  {' '}
            <strong>Lead App</strong> 
            
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Footer;
