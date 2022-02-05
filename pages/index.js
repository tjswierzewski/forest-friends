import { Container, Grid, Typography } from '@material-ui/core';
import NftCard from '../components/NftCard';

export default function Home() {
  const cards = [];
  for (let index = 0; index < 10; index++) {
    cards.push(
      <Grid item key={index}>
        <NftCard src="/images/turtle.jpg" height={267.84} width={200} alt="turtle" />,
      </Grid>,
    );
  }
  return (
    <Container maxWidth="xl">
      <Typography variant="h6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet imperdiet odio.
        Quisque vulputate tempor nisi varius finibus. Sed eleifend vehicula tortor, elementum
        porttitor sapien ullamcorper ut. Aliquam iaculis suscipit massa, at feugiat velit venenatis
        vel. Suspendisse auctor, tellus non iaculis consequat, quam enim aliquet turpis, quis auctor
        nisl erat in elit. Praesent condimentum ultrices sagittis. Ut tempor arcu commodo placerat
        semper.
      </Typography>
      <Grid container direction="row" columns={3}>
        {cards}
      </Grid>
    </Container>
  );
}
