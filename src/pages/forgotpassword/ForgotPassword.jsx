import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
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

const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: '',
  });

  const [isChecked, setIsChecked] = React.useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleChecked = () => {
    if (isChecked === false) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_FORGOT_PASSWORD_URL}`,
        user
      );
      toast.success(res.data.message);
      setUser({
        email: '',
      });
      navigate('/');
      toast(`Check your mail to proceed further.\n ${res.data.data}`, {
        duration: 4000,
        position: 'bottom-center',
        icon: '📩',
        style: {
          borderRadius: '3px',
          background: '#333',
          color: '#fff',
        },
      });
    } catch (err) {
      toast.error(err.response.data.message);
      setUser({
        email: '',
      });
      navigate('/forgot-password');
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
            Forgot Password
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              autoFocus
              label='Email Address'
              id='email'
              type='email'
              name='email'
              autoComplete='email'
              value={user.email}
              onChange={handleChange}
              margin='normal'
              placeholder='  Enter your recovery email'
              required
              fullWidth
            />

            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='*check email before submit'
              value={isChecked}
              onChange={handleChecked}
            />
            {user.email && isChecked ? (
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Reset your password
              </Button>
            ) : (
              <Button
                disabled
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Reset your password
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link to='/login' variant='body2'>
                  Sign in
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
