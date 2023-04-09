import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import classes from './MyCarousel.module.css';
// import Image from "react-multi-ProductsImage/dev/components/image";



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
        desktop: {
        breakpoint: {max: 3000, min: 1024 },
        items: 1

    }, tablet: {
        breakpoint: {max: 1024, min: 464 },
        items: 1

    }, mobile: {
        breakpoint: {max: 464, min: 0 },
        items: 1

    }
}


const images = [
    // '../../images/ProductsImage/MB_pro_13_m1.jpg',
    "https://images.unsplash.com/photo-1644659306528-259903deccde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    // '../../images/ProductsImage/MB_pro_m1.jpg',
    "https://images.unsplash.com/photo-1617871266429-e8bdab31c768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    // '../../images/ProductsImage/MB_pro_14_m1.jpg',
    "https://images.unsplash.com/photo-1637607699132-4b02b865754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // '../../images/ProductsImage/MB_pro_16_m1.jpg',
    "https://images.unsplash.com/photo-1637329573832-5f6adfc3f637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // '../../images/ProductsImage/MB_pro_16.jpg',
    "https://images.unsplash.com/photo-1563898061254-696f043d010c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    // '../../images/ProductsImage/MB_air_m1.jpg'
    "https://images.unsplash.com/photo-1610888287136-0b83815059b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
]




const MyHeaderCarousel = (props, {deviceType}) => {


    // const cls = [
    //     classes.MyCarousel
    // ]


    return (
        <div className={classes.MyCarousel}>
            <Carousel
                // className={classes.carouselWrap}
                responsive={responsive}
                deviceType={deviceType}
                autoPlaySpeed={8000}
                // customTransition="all .5"
                transitionDuration={500}
                // itemClass="image-item"
            >
                {images.slice(0, 6).map(img => {
                    return(
                        <img
                            draggable={false}
                            className={classes.img}
                            src={img}
                            alt={'someimage'}
                            key={images}
                        />
                    )
                })}
            </Carousel>
        </div>
    )

    // render() {
    //
    //     const cls = [
    //         classes.myCarousel
    //     ]
    //
    //
    //     return (
    //         <div className={cls.join(' ')}>
    //             <Carousel responsive={responsive}>
    //                 <picture> mbp</picture>
    //                 <picture> mbp1</picture>
    //                 <picture> mbpm14</picture>
    //                 <picture> mbpm16</picture>
    //                 <picture> mbp16</picture>
    //                 <picture> mba</picture>
    //
    //             </Carousel>
    //         </div>
    //     )
    // }



}

export default MyHeaderCarousel