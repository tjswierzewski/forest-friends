import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="xl" sx={{ margin: '0 auto 2rem auto' }}>
      <Typography variant="h2">Our Mission</Typography>
      <Typography variant="body1" sx={{ margin: '0 auto', maxWidth: '80%' }}>
        Forest Friends is a new and innovative animal welfare initiative started by a group of 5
        students at Northeastern University in Boston, Massachusetts. Our goal consists in tackling
        the restoration of endangered animal species by implementing a technologically advanced way of
        making long-distance adoption fun and rewarding. Through the use of Blockchain technology,
        we&apos;re able to offer our users the possibility to support researchers and wildlife
        associations while remaining in close contact with the adopted animal.
      </Typography>
      <Typography variant="h2">How It Works</Typography>
      <Typography variant="body1" sx={{ margin: '0 auto', maxWidth: '80%' }}>
        When you buy one of our NFTs, a member of the species associated with it will be taken care of
        by one of our verified wildlife program partners with the aim of repopulating it. A
        non-invasive ICARUS tracker will be placed on the chosen animal for data collection purposes.
        The tracker will serve as a medium for researchers to understand the animal&apos;s movements
        and common behaviors in order to better protect it and enable it to thrive in the current
        environment; it will also allow you to directly engage with the animal in the metaverse by
        seeing and following its every move.
      </Typography>
      <Typography variant="h2">Future Plans</Typography>
      <Typography variant="body1" sx={{ margin: '0 auto', maxWidth: '80%' }}>
        We are launching a metaverse for you to interact with your saved animals and travel to other
        people&apos;s sanctuaries. Collect animals, Grow your animals, and Bond with your animals in
        an immersive experience.
      </Typography>
      <Typography variant="h2">Contact Us</Typography>
      <Typography variant="body1" sx={{ margin: '0 auto', maxWidth: '80%' }}>
        Northeastern University Blockchain Club
      </Typography>
    </Container>
  );
}
