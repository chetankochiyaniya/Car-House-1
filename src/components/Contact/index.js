import React from 'react'
import { Typography, TextField, Button, Grid, Container } from '@mui/material';
import './index.css'

function Contact() {
    return (
        <>
            {/* Features Item */}
            <section className="section" id="features">
                <Container>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12}>
                            <div className="section-heading">
                                <Typography variant="h2">
                                    contact <em> info</em>
                                </Typography>
                                <img src="assets/line-dec.png" alt="waves" />
                            </div>
                        </Grid>

                        <Grid item md={4}>
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <Typography variant="h5">
                                <a href="#">+1 333 4040 5566</a>
                            </Typography>
                        </Grid>

                        <Grid item md={4}>
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <Typography variant="h5">
                                <a href="#">contact@company.com</a>
                            </Typography>
                        </Grid>

                        <Grid item md={4}>
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <Typography variant="h5">212 Barrington Court New York</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            {/* Contact Us Area */}
            <section className="section" id="contact-us" style={{ marginTop: 0 }}>
                <Container>
                    <Grid container>
                        <Grid item lg={6} md={6} xs={12}>
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.88228934586!2d72.49679717619708!3d23.028093816120396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4a59dacf7%3A0xff3e2c6ec71f55bd!2sSimform%20Solutions!5e0!3m2!1sen!2sus!4v1685015286549!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <div
                                className="contact-form section-bg"
                                style={{ backgroundImage: 'url(assets/images/contact-1-720x480.jpg)' }}
                            >
                                <form id="contact" action="" method="post">
                                    <Grid container spacing={2}>
                                        <Grid item md={6} sm={12}>
                                            <TextField
                                                name="name"
                                                type="text"
                                                id="name"
                                                label="Your Name*"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item md={6} sm={12}>
                                            <TextField
                                                name="email"
                                                type="email"
                                                id="email"
                                                label="Your Email*"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                name="subject"
                                                type="text"
                                                id="subject"
                                                label="Subject"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                name="message"
                                                id="message"
                                                label="Message"
                                                multiline
                                                rows={6}
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" id="form-submit" variant="contained" color="primary">
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>

        </>
    )
}

export default Contact
