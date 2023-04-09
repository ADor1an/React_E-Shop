// import React from 'react';
// import classes from './'
//
// const ProductItem = props => {
//     return (
//         <div>
//             {props.prdcts.map(el => (
//                 <ProductItem el={el} key={el.id}/>
//             ))}
//
//         </div>
//     );
// };
//
// export default ProductItem;

import React, {Component} from 'react';
import ProductItem from "./Item/ProductItem";
import classes from "./ProductItems.module.css";
import {Container, Typography} from "@mui/material";
// import ProductItem from '../Products/Item/ProductItem'

class ProductItems extends Component {
    render() {
        return (
            <div className={classes.Items}>
                <div>
                    <Typography align={'center'}>Наші Товари</Typography>
                </div>
                <Container>
                    <main>
                        {this.props.products.map(el => (
                            <ProductItem el={el} key={el.id}/>
                        ))}
                    </main>
                </Container>


            </div>
        );
    }
}

export default ProductItems;