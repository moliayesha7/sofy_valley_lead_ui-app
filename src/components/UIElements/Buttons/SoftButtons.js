import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SoftButtons = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '10px'
          }}
        >
          Soft Buttons
        </Typography>
        
        <Stack
          sx={{
            display: 'inline-block'
          }}
        >
          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#757FEF',
              textTransform: 'capitalize',
              borderRadius: '10px',
              p: '10px 30px',
              fontSize: '14px',
              mr: '10px',
              mt: '10px'
            }}
          >
            Primary
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#818093',
              textTransform: 'capitalize',
              borderRadius: '10px',
              p: '10px 30px',
              fontSize: '14px',
              mr: '10px',
              mt: '10px'
            }}
          >
            Secondary
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#00B69B',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
            }}
          >
            Success
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#2DB6F5',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
            }}
          >
            Info
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#FFBC2B',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
            }}
          >
            Warning
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#EE368C',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
            }}
          >
            Danger
          </Button>

          <Button 
            sx={{
              background: 'rgba(117, 127, 239, 0.1)',
              color: '#260944',
              p: '10px 30px',
              fontSize: '14px',
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
            }}
          >
            Dark
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default SoftButtons;
