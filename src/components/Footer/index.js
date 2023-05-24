import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body1" align="center" mt={2} mb={2}>
          © 2020 Car House - Developed by: <Typography variant="body2" component="span" color="primary">Chetan Kochiyaniya</Typography>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
