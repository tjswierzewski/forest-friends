import { Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const LinkDuo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

const LinkWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '5rem',
  justifyContent: 'space-between',
  margin: '4rem 0 0 0',
}));

export default function LinkCluster({ children }) {
  return (
    <LinkWrapper>
      <LinkDuo>{children}</LinkDuo>
      <Box sx={{ width: '30rem', height: '.1rem', backgroundColor: '#000000' }} />
    </LinkWrapper>
  );
}
