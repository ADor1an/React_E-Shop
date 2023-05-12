import React, {Component} from 'react';
import classes from './ProductItem.module.css'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";

const ProductItem = ({item}) => {
    return (
        <div className={classes.Item}>

            <Card sx={{ maxWidth: 345 }}
                  columns={{ xs: 1, sm: 2, md: 3 }}
            >
                <CardMedia
                    // className={classes.img}
                    component="img"
                    alt="green iguana"
                    // height="45%"
                    height="299"
                    image={item.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}

                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink
                        to={item.linkTo}
                        exact={item.linkExact}
                        state={item.state}
                    >
                        <Button size="small">
                            {item.linkLabel}
                        </Button>
                    </NavLink>

                </CardActions>
            </Card>
        </div>

    )
}

export default ProductItem;