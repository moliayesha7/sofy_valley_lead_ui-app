import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AbcIcon from '@mui/icons-material/Abc';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AdbIcon from '@mui/icons-material/Adb';
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AlbumIcon from '@mui/icons-material/Album';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '../../styles/PageTitle.module.css'

export default function MaterialIcons() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Material Icons</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Material Icons</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "40px 35px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",  
            mb: "15px",
          }}
        >
          Material Icons
        </Typography>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 2 }}
        >
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AbcIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AcUnitIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessAlarmIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessAlarmsIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessTimeIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessTimeFilledIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>
 
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessibilityIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessibilityNewIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessibleIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccessibleForwardIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccountBalanceIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccountBalanceWalletIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccountBoxIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccountCircleIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AccountTreeIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>
 
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AdUnitsIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AdbIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>
 
          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddAPhotoIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddAlarmIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddAlertIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddBoxIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddBusinessIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddCardIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddCircleIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddCircleOutlineIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AddToQueueIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AlbumIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AlignVerticalBottomIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3} lg={2}>
            <Box
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                p: '30px',
                textAlign: 'center',
                borderRadius: '10px',
                mt: '15px'
              }}
            >
              <AllInboxIcon style={{ fontSize: '60px' }} />
            </Box>
          </Grid>
        </Grid>
 
        <Box 
          sx={{
            textAlign: 'center',
            mt: '10px'
          }}
        >
          <a href="https://mui.com/material-ui/material-icons/" target="_blank" rel="noreferrer" className="text-decoration-none">
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "16px",
                padding: "12px 30px",
              }}
            >
              View All Icons
            </Button>
          </a>
        </Box>
      </Card>
    </>
  );
}
