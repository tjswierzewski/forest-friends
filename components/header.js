import { Box, Link as LinkText } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
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
          <Link href="/" passHref>
            <LinkText
              underline="hover"
              variant="pageLink"
              sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Home
            </LinkText>
          </Link>

          <LinkText
            underline="hover"
            variant="pageLink"
            sx={{
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            About
          </LinkText>
        </LinkCluster>
        <Image
          src="/images/Forest_Friends_Logo.png"
          height={350}
          width={350}
          alt="Forest Friends Logo"
        />
        <LinkCluster>
          <LinkText
            underline="hover"
            variant="pageLink"
            sx={{
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            My Animals
          </LinkText>
          <Link href="/adopt" passHref>
            <LinkText
              underline="hover"
              variant="pageLink"
              sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Adopt
            </LinkText>
          </Link>
        </LinkCluster>
      </Box>
      {children}
    </div>
  );
}
