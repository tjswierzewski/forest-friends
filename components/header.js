import { Box, Typography } from '@material-ui/core';
import { alpha, styled } from '@mui/material/styles';
import Image from 'next/image';

const LinkDuo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}));

export default function Header({ Children }) {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <LinkDuo>
          <Typography variant="h3">Home</Typography>
          <Typography variant="h3">About</Typography>
        </LinkDuo>
        <Image
          src="/images/Forest_Friends_Logo.png"
          height={350}
          width={350}
          alt="Forest Friends Logo"
        />
        <LinkDuo>
          <Typography variant="h3">My Animals</Typography>
          <Typography variant="h3">Adopt</Typography>
        </LinkDuo>
      </Box>
      {Children}
    </div>
  );
}
