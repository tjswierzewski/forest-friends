import { Box } from '@mui/material';
import Image from 'next/image';

export default function NftCard({ src, height, width, alt }) {
  return <Image src={src} height={height} width={width} alt={alt} />;
}
