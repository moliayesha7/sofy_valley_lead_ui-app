import * as React from "react";
import { AppBar, Toolbar, IconButton, Stack, Typography, Avatar } from "@mui/material";
import SearchForm from "./SearchForm";
import Profile from "./Profile";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
const TopNavbar = ({ toogleActive }) => {
  return (
    <>
      <AppBar
        color="inherit"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
          py: "20px",
          mb: "30px",
          position: "sticky",
        }}
      >
        <Toolbar> 
            <Grid container mb="20px" xl={12} sx={{ display: 'flex'}}>
                <Grid item xs={1} mb="10px">
                  <Tooltip title="Hide/Show" arrow>
                    <IconButton
                      size="sm"
                      edge="start"
                      color="inherit"
                      onClick={toogleActive}
                    >
                      <i className="ri-align-left"></i>
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={10} mb="14px" sx={{ flexGrow: 1 }}>  
                    <Typography as="h1" fontSize="12px" fontWeight="600">
                      Leads
                    </Typography>
                  
                    <Typography as="h1" fontSize="12px" fontWeight="400">
                        Difficulties increase the nearer we get to the goal
                    </Typography>
                </Grid>
                
                <Grid item xs={1} mb="10px">
                    <Stack direction="row" >
                      <Profile />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                  <SearchForm />
                </Grid>
            </Grid>
           
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavbar;
