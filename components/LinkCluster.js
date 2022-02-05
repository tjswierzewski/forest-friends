import { Box } from '@material-ui/core';
import { alpha, styled } from '@mui/material/styles';

const LinkDuo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}));

const LinkWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '5rem',
  justifyContent: 'space-between',
}));

export default function LinkCluster({ children }) {
  return (
    <LinkWrapper>
      <LinkDuo>{children}</LinkDuo>
      <Box sx={{ width: '25rem', height: '.1rem', backgroundColor: '#000000' }} />
    </LinkWrapper>
  );
}
