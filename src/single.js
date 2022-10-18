import { Card, CardContent, CardMedia, Chip, Tooltip, Typography, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css';

function Single() {


    let navigate = useNavigate()
    let location = useLocation()
    console.log(location)
    return (
        <div>
            <Container>
                <Grid container sx={{ marginTop: "100px" }} spacing={3}>
                    <Grid item md={3} xs={12} sm={6} >
                        <Card className="bgLight">
                            <CardMedia >
                                <img src={location.state.thumbnail} width="100%" height="100%" alt="" />
                            </CardMedia>
                            <CardContent>
                                <Tooltip title={location.state.title}>
                                    <Typography
                                        sx={{ height: 60, overflow: "hidden", fontSize: "25px" }}
                                        variant="h6"
                                    >
                                        {location.state.title.slice(0, 30) +
                                            (location.state.title.length > 30 ? "..." : "")}
                                        <Typography><b>{location.state.brand}</b></Typography>
                                    </Typography>
                                </Tooltip>

                                <Typography>{location.state.description}</Typography>
                                <Typography>{location.state.category}</Typography>
                                <Typography sx={{ fontSize: "16px" }}>
                                    Price $<b>{location.state.price}</b> /-
                                </Typography>
                                <Typography sx={{ fontSize: "16px" }}>
                                    Price $<b>{location.state.discountPercentage}</b> /-
                                </Typography>
                                <Typography sx={{ fontSize: "16px" }}>
                                    Rating<b>{location.state.rating}/5</b>
                                </Typography>
                                <Typography sx={{ fontSize: "16px" }}>
                                Stock <b>{location.state.stock}</b>
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Single
