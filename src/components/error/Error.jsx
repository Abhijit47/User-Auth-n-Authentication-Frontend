import React from 'react';
import Box from '@mui/material/Box';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const Error = () => {
  return (
    <>
      <Box
        sx={{
          width: '95vw',
          height: '95vh',
          margin: `0 auto`,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap-reverse',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1>404 Not Found</h1>
        <ReportProblemOutlinedIcon
          fontSize='large'
          color='error'
          sx={{
            width: 300,
            height: 300,
            margin: '0 auto',
            '&:hover': {
              cursor: 'pointer',
              filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
            },
          }}
        />
      </Box>
    </>
  );
};

export default Error;
