import { Container, Grid, Typography } from '@mui/material';
import NftCard from '../components/NftCard';

export default function Home() {
  const nums = [...Array(10).keys()];
  const cards = nums.map((i) => {
    return (
      <Grid item key={i} xs="auto" justifyContent="center">
        <NftCard
          src={`https://forest-friends.s3.amazonaws.com/turtles/${i + 1}.png`}
          height={401.76}
          width={300}
          alt="turtle"
        />
        ,
      </Grid>
    );
  });
  return (
    <Container maxWidth="xl">
      <Typography variant="h6">
        Forest Friends NFTs are curated from the best network of wildlife programs working to restore
        endangered species across the world. Donate today to save an animal in the wild and receive a
        random NFT of the animal you saved. Take this companion with you in the Metaverse and visit
        other animal sanctuaries or make your own!
      </Typography>
      <Grid container direction="row" columnSpacing={20} rowSpacing={10} sx={{ margin: '0 auto' }}>
        {cards}
      </Grid>
    </Container>
  );
}
