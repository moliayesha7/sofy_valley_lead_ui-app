import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

export default function Logout() {
  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            padding: "70px 0 100px",
          }}
        >
          <Box
            sx={{
              background: "#fff",
              padding: "30px 20px",
              borderRadius: "10px",
              maxWidth: "510px",
              ml: "auto",
              mr: "auto",
              textAlign: "center"
            }}
          >
            <Box>
              <img src="/images/logo.png" alt="logo" />
            </Box>

            <Box mt={4} mb={4}>
              <img src="/images/coffee.png" alt="Coffee" />
            </Box>

            <Typography as="h1" fontSize="20px" fontWeight="600" mb={1}>
              You are Logged Out
            </Typography>
           

            <Button
              href="/authentication/sign-in/"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "16px",
                padding: "12px 10px",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
}