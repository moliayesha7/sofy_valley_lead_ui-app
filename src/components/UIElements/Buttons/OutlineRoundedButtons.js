import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const OutlineRoundedButtons = () => {
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
          Outline Rounded Buttons
        </Typography>
        
        <Stack
          sx={{
            display: 'inline-block'
          }}
        >
          <Button 
            variant="outlined"
            color="primary"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mr: '10px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Primary
          </Button>

          <Button 
            variant="outlined"
            color="secondary"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mr: '10px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Secondary
          </Button>

          <Button 
            variant="outlined"
            color="success"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mr: '10px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Success
          </Button>

          <Button 
            variant="outlined"
            color="info"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mr: '10px',
              mt: '10px', 
              fontSize: '14px'
            }}
          >
            Info
          </Button>

          <Button 
            variant="outlined"
            color="warning"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mr: '10px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Warning
          </Button>

          <Button 
            variant="outlined"
            color="danger"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mr: '10px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Danger
          </Button>

          <Button 
            variant="outlined"
            color="dark"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mr: '10px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Dark
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default OutlineRoundedButtons;
