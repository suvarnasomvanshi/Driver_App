import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        // slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        // slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        // slidesToSlide: 1, // optional, default to 1.
    },
};

const OurCustomer = () => {
    return (
        <Box sx={{ width:'100vw', display:'flex',justifyContent:'center'}}>
        <Box sx={{ px: { lg: 1, md: 8, xs: 2 }, my: 5, width:'100%',maxWidth:'1300px'}}>

            <Typography
                mb={2}
                sx={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontFamily: "Inter",
                    fontSize: "35px",
                }}
                color={"#000000"}
            >
                Our Customers
            </Typography>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                transitionDuration={1000}
                customLeftArrow={<></>}
                customRightArrow={<></>}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                style={{width:'80vw', maxWidth: '1300px' }}
            >
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/BhandariAutomobiles.webp"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            ⁠Bhandari Automobiles 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/cab-e.webp"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            CAB E
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/cars-24.png"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            Cars 24
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/evera.png"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            Evera
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/everest.jpg"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            Everest Fleet
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/GoEV mobility.jpeg"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            ⁠Go EV Mobility
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/LMEV.jpeg"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            LMEV
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/Maruti-Suzuki.png"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            ⁠Maruti Suzuki 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/rapido.png"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            Rapido
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/revv.png"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            Revv
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/spinny.png"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            Spinny
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250 , mb:5, mx:'auto'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="customers/Routematic.jpeg"
                            alt="green iguana"
                            sx={{height:140,p:1}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            Routematic
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Carousel>
        </Box>
        </Box>
    );
};

export default OurCustomer;
