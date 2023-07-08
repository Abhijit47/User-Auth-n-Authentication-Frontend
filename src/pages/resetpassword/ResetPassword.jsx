import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockResetIcon from '@mui/icons-material/LockReset';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import toast from 'react-hot-toast';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const ResetPassword = () => {
  const [userPassword, setUserPassword] = useState({
    password: '',
    cpassword: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [verify, setVerify] = useState('');
  const navigate = useNavigate();

  const { token } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserPassword({ ...userPassword, [name]: value });
  };

  const handleChecked = () => {
    if (isChecked === false) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    // define a async function to verify the token
    const verifyToken = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_RESET_PASSWORD_URL}/${token}`
        );

        setVerify(res.data.message);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };
    verifyToken();
    if (verify === undefined) {
      toast.error('Invalid request!');
      navigate('/');
    }
  }, [navigate, token, verify]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   password: data.get('password'),
    //   cpassword: data.get('cpassword'),
    // });
    if (userPassword.password.length !== userPassword.cpassword.length) {
      return toast.error('Passwords not matched!');
    }

    try {
      const { password } = userPassword;
      const res = await axios.post(
        `${process.env.REACT_APP_NEW_PASSWORD_URL}/${token}`,
        { password: password }
      );
      console.log(res.data);
      toast.success('Password changed Successfully.');
      setUserPassword({
        password: '',
        cpassword: '',
      });
      navigate('/');
    } catch (err) {
      toast.error(err.respnse.data.message);
      setUserPassword({
        password: '',
        cpassword: '',
      });
      navigate('/');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockResetIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Reset password
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              autoFocus
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              // autoComplete='current-password'
              value={userPassword.password}
              onChange={handleChange}
            />
            <TextField
              type='password'
              label='Confirm new password'
              id='confpassword'
              name='cpassword'
              margin='normal'
              required
              fullWidth
              autoComplete='current-password'
              value={userPassword.cpassword}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='*check passwords before submit'
              value={isChecked}
              onChange={handleChecked}
            />
            {isChecked ? (
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Reset password
              </Button>
            ) : (
              <Button
                disabled
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Reset password
              </Button>
            )}
            {/* <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default ResetPassword;
