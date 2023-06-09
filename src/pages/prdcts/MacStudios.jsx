import React, {Component, useState} from 'react';
import classes from './CardItems.module.css'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import Modal from "../../components/UI/funcModal/FunctionalProductPopup/FunctionalProductPopup";

const MacStudios = ({mStudio, addToBasket}) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (item) => {
        setShowModal(!showModal);
        setSelectedProduct(item);
        if (showModal) {
            document.body.style.overflowY = 'unset';
            setSelectedProduct(null);
        } else {
            document.body.style.overflowY = 'hidden';
        }
    };
    const MacStudioCardS = () => {
        return (
            <div className={classes.Items}>
                <div>
                    <Typography align={'center'}  gutterBottom variant="h3" >Mac Studio</Typography>
                </div>
                <Container>
                    <main>
                        {mStudio.map((item,index) => (
                            <MacStudioCard item={item} key={index} addToBasket={addToBasket}/>
                        ))}
                    </main>
                </Container>
            </div>
        )
    }
    const MacStudioCard = ({item}) => {
        return (
            <div className={classes.Item}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="220"
                        image={item.img}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h3"
                        >
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"
                                onClick={() => toggleModal(item)}
                        >Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <MacStudioCardS/>
            <Modal
                item={selectedProduct}
                show={showModal}
                closeModal={toggleModal}
            >
                {selectedProduct && (
                    <div>
                        <div className={classes.ModalHead}>
                            <Typography className={classes.ModalCaption}>{selectedProduct.title}</Typography>
                        </div>
                        <div className={classes.ModalContentParent}>
                            <div className={classes.ModalContent}>
                                <figure>
                                    <img src={selectedProduct.img} alt={selectedProduct.title}/>
                                </figure>
                                <div className={classes.btnBox}>
                                    <Button size='small'
                                            variant='contained'
                                            className={classes.addBtn}
                                            onClick={() => {
                                                // addToBasket(selectedProduct);
                                                // this.toggleModal()
                                                const handleAddToBasket = () => {
                                                    addToBasket(selectedProduct);
                                                    toggleModal();
                                                };
                                                handleAddToBasket();
                                            }}
                                    >Add to cart</Button>
                                </div>
                                <div className={classes.description}>
                                    <h2 className={classes.desc}>
                                        Tech
                                    </h2>

                                    <p>{selectedProduct.tech}</p>

                                </div>

                                <div className={classes.specsList}>
                                    <Typography>TECHS</Typography>
                                    <ol>
                                        <li>{selectedProduct.diagonal}</li>
                                        <li>{selectedProduct.resolution}</li>
                                        <li>{selectedProduct.bright}</li>
                                    </ol>
                                    <Typography> Display Technologies</Typography>
                                    <ol>
                                        <li>{selectedProduct.tech}</li>
                                    </ol>
                                    <Typography>Other</Typography>
                                    <ol>
                                        <li>{selectedProduct.camera}</li>
                                        <li>{selectedProduct.speakers}</li>
                                        <li>{selectedProduct.ports}</li>
                                        <li>{selectedProduct.dif}</li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </Modal>


        </div>

    )
}

// class MacStudios extends Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             selectedProduct : null,
//             showModal : false
//         }
//     }
//
//     toggleModal = (item) => {
//         this.setState({ showModal: !this.state.showModal , selectedProduct: item });
//         if (this.state.showModal) {
//             document.body.style.overflowY = 'unset'
//             this.setState({selectedProduct: null})
//         }   else    {
//             document.body.style.overflowY = 'hidden'
//
//         }
//
//     }
//     render() {
//
//         const MacStudioCardS = () => {
//             return (
//                 <div className={classes.Items}>
//                     <div>
//                         <Typography align={'center'}  gutterBottom variant="h3" >Mac Studio</Typography>
//                     </div>
//                     <Container>
//                         <main>
//                             {mStudio.map((item,index) => (
//                                 <MacStudioCard item={item} key={index} />
//                             ))}
//                         </main>
//                     </Container>
//                 </div>
//             )
//         }
//         const MacStudioCard = ({item}) => {
//             return (
//                 <div className={classes.Item}>
//                     <Card sx={{ maxWidth: 345 }}>
//                         <CardMedia
//                             component="img"
//                             alt="green iguana"
//                             height="220"
//                             image={item.img}
//                             title={item.title}
//                         />
//                         <CardContent>
//                             <Typography
//                                 gutterBottom
//                                 variant="h3"
//                             >
//                                 {item.title}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <Button size="small"
//                                     onClick={() => this.toggleModal(item)}
//                             >Learn More
//                             </Button>
//                         </CardActions>
//                     </Card>
//                 </div>
//             )
//         }
//
//         const {mStudio, addToBasket} = this.props
//         const {selectedProduct} = this.state
//         return (
//             <div>
//
//                 <MacStudioCardS/>
//
//                 <Modal
//                     item={this.state.selectedProduct}
//                     show={this.state.showModal}
//                     closeModal={this.toggleModal}
//                 >
//                     {selectedProduct && (
//                         <div>
//                             <div className={classes.ModalHead}>
//                                 <Typography className={classes.ModalCaption}>{selectedProduct.title}</Typography>
//                             </div>
//                             <div className={classes.ModalContentParent}>
//                                 <div className={classes.ModalContent}>
//                                     <figure>
//                                         <img src={selectedProduct.img} alt={selectedProduct.title}/>
//                                     </figure>
//                                     <div className={classes.btnBox}>
//                                         <Button size='small'
//                                                 variant='contained'
//                                                 className={classes.addBtn}
//                                                 onClick={() => {
//                                                     // addToBasket(selectedProduct);
//                                                     // this.toggleModal()
//                                                     const handleAddToBasket = () => {
//                                                         addToBasket(selectedProduct);
//                                                         this.toggleModal();
//                                                     };
//                                                     handleAddToBasket();
//                                                 }}
//                                         >Add to cart</Button>
//                                     </div>
//                                     <div className={classes.description}>
//                                         <h2 className={classes.desc}>
//                                             Tech
//                                         </h2>
//
//                                         <p>{selectedProduct.tech}</p>
//
//                                     </div>
//
//                                     <div className={classes.specsList}>
//                                         <Typography>TECHS</Typography>
//                                         <ol>
//                                             <li>{selectedProduct.diagonal}</li>
//                                             <li>{selectedProduct.resolution}</li>
//                                             <li>{selectedProduct.bright}</li>
//                                         </ol>
//                                         <Typography> Display Technologies</Typography>
//                                         <ol>
//                                             <li>{selectedProduct.tech}</li>
//                                         </ol>
//                                         <Typography>Other</Typography>
//                                         <ol>
//                                             <li>{selectedProduct.camera}</li>
//                                             <li>{selectedProduct.speakers}</li>
//                                             <li>{selectedProduct.ports}</li>
//                                             <li>{selectedProduct.dif}</li>
//                                         </ol>
//                                     </div>
//                                 </div>
//
//                             </div>
//                         </div>
//                     )}
//
//                 </Modal>
//
//
//             </div>
//         );
//     }
// }

export default MacStudios;