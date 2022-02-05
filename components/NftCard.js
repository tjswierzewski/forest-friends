import { Box } from '@mui/material';
import Image from 'next/image';

export default function NftCard({ src, height, width, alt }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Image src={src} height={height} width={width} alt={alt} />
    </Box>
  );
}
