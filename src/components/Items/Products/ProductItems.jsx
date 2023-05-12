

import React, {Component} from 'react';
import ProductItem from "./Item/ProductItem";
import classes from "./ProductItems.module.css";
import {Container, Typography} from "@mui/material";
// import ProductItem from '../Products/Item/ProductItem'

const ProductItems = ({products}) => {


    return (
        <div className={classes.Items}>
            <div>
                <Typography align={'center'}  classname={classes.Heading}>Наші Товари</Typography>
            </div>
            <Container>
                <main>
                    {products.map(item => (
                        <ProductItem item={item} key={item.id}/>
                    ))}
                </main>
            </Container>


        </div>
    )
}

// class ProductItems extends Component {
//     render() {
//         return (
//
//         );
//     }
// }

export default ProductItems;