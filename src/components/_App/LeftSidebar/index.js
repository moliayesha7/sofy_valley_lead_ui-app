import React from 'react';
import {
  Box,Typography, Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import Link from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';
import SearchIcon from "@mui/icons-material/Search";


const SidebarNav = styled("nav")(({ theme }) => ({
  background: '#fff',
  boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
  width: '300px',
  padding: '10px 5px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  transition: '350ms',
  zIndex: '10',
  overflowY: 'auto'
}));
 
const SidebarWrap = styled("div")(({ theme }) => ({
  width: '100%'
}));

const Sidebar = ({ toogleActive }) => {
  return (
    <>
      <SidebarNav className="LeftSidebarNav">
        <SidebarWrap>
          <Box 
            sx={{ 
              mb: '5px',
              px: '20px',
              display: 'flex',
              alignitems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Link href='/'>
              <Image src={logo} alt="Logo" />
            </Link>

            <IconButton 
              onClick={toogleActive} 
              size="small"
              sx={{
                background: 'rgb(253, 237, 237)',
                display: { lg: 'none' }
              }}
            >
              <ClearIcon />
            </IconButton>
          </Box>
          <Grid container  mb="20px" alignitems="center"
           sx={{
            display: "flex",
            alignitems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEF0F7"
          }}
          >
              <Grid item xs={4} mb="10px">
                <Avatar
                  src="/images/user1.png"
                  alt="Adison Jeck"
                  sx={{ width: 70, height:70 ,textAlign:"right"}}
                  alignitems="center"
                />
              </Grid>
              <Grid item xs={8} mb="10px">
                <Typography as="h1" fontSize="16px" fontWeight="800">
                  Hello ! Good Evening Admin
              
                </Typography>
              </Grid>
          </Grid>            
           
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
