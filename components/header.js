import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import LinkCluster from './LinkCluster';

export default function Header({ children }) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '4rem',
        }}
      >
        <LinkCluster>
          <Typography variant="h3">Home</Typography>
          <Typography variant="h3">About</Typography>
        </LinkCluster>
        <Image
          src="/images/Forest_Friends_Logo.png"
          height={350}
          width={350}
          alt="Forest Friends Logo"
        />
        <LinkCluster>
          <Typography variant="h3">My Animals</Typography>
          <Typography variant="h3">Adopt</Typography>
        </LinkCluster>
      </Box>
      {children}
    </div>
  );
}
