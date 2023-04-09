import React from 'react';
// import Items from "../components/Items/Items";
// import {Typography} from "@mui/material";
// import MBP14 from "../images/ProductsImage/MB_pro_14_m1.jpg";
// import MBP16 from "../images/ProductsImage/MB_pro_16_m1.jpg";
// import MBP13 from "../images/ProductsImage/MB_pro_13_m1.jpg";
// import MBA from "../images/ProductsImage/MB_air_m1.jpg";
// import MBP_I_16 from "../images/ProductsImage/MB_pro_16.jpg";
import MyHeaderCarousel from "../components/Carousel/MyHeaderCarousel";
// import classes from "../components/Items/Item/Item.module.css";
import ProductItems from "../components/Items/Products/ProductItems";



class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'Imacs',
                    category: 'monoblock mac',
                    image: 'https://images.unsplash.com/photo-1612093991429-acd0fc7b1804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80',
                    price: null,
                    link: null,
                    linkTo: '/prdcts/monoblocks',
                    linkExact: 'false',
                    linkLabel: 'Imacs',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolore eius eum hic in incidunt minima pariatur quidem quisquam? ',
                    alt: null,

                },
                {
                    id: 2,
                    title: 'Mac Pro',
                    category: 'mac PC',
                    image: 'https://images.unsplash.com/photo-1584743567529-fb099bbb7076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    price: null,
                    // link: null,
                    linkTo: '/prdcts/macpro',
                    linkExact: 'false',
                    linkLabel: 'Mac Pro',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolore eius eum hic in incidunt minima pariatur quidem quisquam? ',
                    alt: null,

                },
                {
                    id: 3,
                    title: 'Mac Studio',
                    category: 'small mac PC',
                    image: 'https://images.unsplash.com/photo-1657780980869-f92e0f651c38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                    price: null,
                    // link: null,
                    linkTo: '/prdcts/macstudios',
                    linkExact: 'false',
                    linkLabel: 'Mac Studio',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolore eius eum hic in incidunt minima pariatur quidem quisquam? ',
                    alt: null,

                },
                {
                    id: 4,
                    title: 'Mac Mini',
                    category: 'slim mac PC',
                    image: 'https://images.unsplash.com/photo-1641919634277-96fb3b69ca26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80',
                    price: null,
                    // link: null,
                    linkTo: '/prdcts/macmini',
                    linkExact: 'false',
                    linkLabel: 'Mac Mini',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolore eius eum hic in incidunt minima pariatur quidem quisquam? ',
                    alt: null,

                },
                {
                    id: 5,
                    title: 'Displays',
                    category: 'Monitors',
                    image: 'https://images.unsplash.com/photo-1616711414401-b69525289754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                    image2: 'https://images.unsplash.com/photo-1616711414401-b69525289754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                    price: null,
                    // link: null,
                    linkTo: '/prdcts/displays',
                    linkExact: 'false',
                    linkLabel: 'Monitors',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolore eius eum hic in incidunt minima pariatur quidem quisquam? ',
                    alt: null,

                },
                {
                    id: 6,
                    title: 'MacBooks',
                    category: 'apple laptops',
                    image: 'https://images.unsplash.com/photo-1637329273022-72ebc0fbd4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    price: null,
                    linkTo: '/prdcts/macbooks',
                    linkExact: 'false',
                    linkLabel: 'Macbooks',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolore eius eum hic in incidunt minima pariatur quidem quisquam? ',
                    alt: null,

                },
                {
                    id: 7,
                    title: 'Accessories',
                    category: 'accessories',
                    image: 'https://images.unsplash.com/photo-1616578273461-3a99ce422de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                    price: null,
                    // link: null,
                    linkTo: '/accessories',
                    linkExact: 'false',
                    linkLabel: 'Accessories',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolore eius eum hic in incidunt minima pariatur quidem quisquam? ',
                    alt: null,

                },
            ],
        }

    }
    render() {
        return (

            <>
                <MyHeaderCarousel/>
                <ProductItems products={this.state.products}/>


                {/*<Items items={this.state.items}*/}
                {/*    specs={this.state.specs}*/}


            </>

        )
    }
}

export default HomePage;