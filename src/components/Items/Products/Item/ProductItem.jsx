


import React, {Component} from 'react';
import classes from './ProductItem.module.css'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import Modal from "../../../UI/funcModal/Modal";

class ProductItem extends Component {
    render() {
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
                        image={this.props.el.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.props.el.title}

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {this.props.el.description}

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link
                            to={this.props.el.linkTo}
                            exact={this.props.el.linkExact}
                        >
                            <Button size="small">
                                {this.props.el.linkLabel}
                            </Button>
                        </Link>

                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default ProductItem;