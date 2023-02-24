import React,{useState} from "react";
import Link from "next/link";
import axios from 'axios';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import login from "../../data/login"
import { useRouter } from "next/router";
const SignInForm = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    const email = e.target.value;
    setEmail(email);
  };
  const handleOnChangePassword = (e) => {
    setUserMsg("");
    const password = e.target.value;
    setPassword(password);
  };


 const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    // if (email & password) {
      try {
        // const data = {email: "admin@example.com", password: "password"}
        // const response = await axios
        //   .post(data)
        //   .then((response) => {        
            const loggedInResponse =  login;
            console.log({loggedInResponse})
            if (loggedInResponse.success) {
              localStorage.setItem('token',loggedInResponse.data.token)
              router.push("/dashboard");
            } else {
              setIsLoading(false);
              setUserMsg("Something went wrong logging in");
            }
      // })
      } catch (error) {
        console.error("Something went wrong logging in", error);
        setIsLoading(false);
      }
    // } else {
    //   setIsLoading(false);
    //   setUserMsg("Enter a valid email address");
    // }
  };


  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            maxWidth: "510px",
            ml: "auto",
            mr: "auto",
            padding: "50px 0 100px",
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Typography as="h1" fontSize="28px" fontWeight="700" mb="5px">
                Sign In{" "}
              </Typography>

              <Typography fontSize="15px" mb="30px">
                Already have an account?{" "}
                <Link
                  href="/authentication/sign-up"
                  className="primaryColor text-decoration-none"
                >
                  Sign up
                </Link>
              </Typography>

              <Box component="form" noValidate onSubmit={handleLogin}>
                <Box
                  sx={{
                    background: "#fff",
                    padding: "30px 20px",
                    borderRadius: "10px",
                    mb: "20px",
                  }}
                >

                  <Typography as="h1" fontSize="12px" fontWeight="500" mb="20px">
                      Email:  admin@example.com & Password:  password{" "}
                  </Typography>
                  <Grid container alignitems="center" spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="text"
                        autoComplete="email"
                        onChange={handleOnChangeEmail}
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handleOnChangePassword}
                        autoComplete="new-password"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Grid container alignitems="center" spacing={2}>
                  <Grid item xs={6} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Remember me."
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} textAlign="end">
                    <Link
                      href="/authentication/forgot-password"
                      className="primaryColor text-decoration-none"
                    >
                      Forgot your password?
                    </Link>
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
              
                  sx={{
                    mt: 2,
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
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default SignInForm;
