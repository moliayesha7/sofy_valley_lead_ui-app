import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';

const ButtonsWithIcon = () => {
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
            mb: '10px',
          }}
        >
          Buttons With Icon
        </Typography>
        
        <Stack
          sx={{
            display: 'inline-block'
          }}
        >
          <Button 
            startIcon={<PersonIcon />}
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Primary
          </Button>

          <Button 
            startIcon={<AddIcon />}
            variant="contained"
            color="secondary"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Secondary
          </Button>

          <Button 
            startIcon={<CheckIcon />}
            variant="contained"
            color="success"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Success
          </Button>

          <Button 
            startIcon={<InfoIcon />}
            variant="contained"
            color="info"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Info
          </Button>

          <Button 
            startIcon={<WarningIcon />}
            variant="contained"
            color="warning"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Warning
          </Button>

          <Button 
            startIcon={<DeleteIcon />}
            variant="contained"
            color="danger"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
              color: '#fff',
              p: '10px 30px',
              fontSize: '14px'
            }}
          >
            Danger
          </Button>

          <Button 
            startIcon={<SendIcon />}
            variant="contained"
            color="dark"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '10px',
              mr: '10px',
              mt: '10px',
              color: '#fff',
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

export default ButtonsWithIcon;
