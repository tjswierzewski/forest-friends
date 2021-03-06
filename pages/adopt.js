import { Box, Button, Container, Typography } from '@mui/material';
import NftCard from '../components/NftCard';

export default function Adopt() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', columnGap: 20 }}>
        <NftCard
          src="https://forest-friends.s3.amazonaws.com/turtles/3.png"
          height={401.76}
          width={300}
          alt="turtle"
        />
        <NftCard
          src="https://forest-friends.s3.amazonaws.com/turtles/5.png"
          height={401.76}
          width={300}
          alt="turtle"
        />
        <NftCard
          src="https://forest-friends.s3.amazonaws.com/turtles/8.png"
          height={401.76}
          width={300}
          alt="turtle"
        />
      </Box>
      <Typography variant="h2">Getting your Forest Friend!</Typography>
      <Typography variant="h6">
        Click the button bellow to mint your very own Forest Friend NFT. By minting you are donating
        to the conservation efforts of the animal you receive. Each Forest Friend NFT corresponds to a
        real animal being tracked by conservationists With your Forest Friend you get a few benefits.
        First you are able to share your collection to show off your support in bio diversity.
        Secondly you get access to data collected from the animal your NFT is connected to. Finally
        you get the satisfaction of supporting conservation efforts around the world.
      </Typography>
      <Button variant="contained" sx={{ fontSize: '3rem', margin: '1rem 0', fontWeight: '800' }}>
        Mint your Forest Friend
      </Button>
    </Container>
  );
}
