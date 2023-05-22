import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import CarVideo from '../../assetes/CarVideo.mp4';

const VideoContainer = styled('div')`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio (change as needed) */

  @media (max-width: 600px) {
    padding-top: 75%; /* Increase height on smaller devices */
  }
`;

const Video = styled('video')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

const ButtonStyled = styled(Button)`
position: relative;
  margin: 12px;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 30px;
  border-width: 3px;

  @media (max-width: 900px) {
    padding: 5px 10px; /* Decrease padding on smaller devices */
    font-size: 12px; /* Decrease font size on smaller devices */
  }
`;

function VideoComponent() {
  return (
    <Container disableGutters maxWidth="xl">
      <VideoContainer>
        <Video autoPlay muted loop id="myVideo">
          <source src={CarVideo} type="video/mp4" />
        </Video>
      </VideoContainer>

      <Content>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <a href="/electric">
              <ButtonStyled variant="outlined" color="primary">
                Electric
              </ButtonStyled>
            </a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <a href="/gas">
              <ButtonStyled variant="outlined" color="primary">
                Gas
              </ButtonStyled>
            </a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <a href="/">
              <ButtonStyled variant="outlined" color="primary">
                Accessories
              </ButtonStyled>
            </a>
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
}

export default VideoComponent;
