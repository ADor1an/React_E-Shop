import React, { useState} from 'react';
import {Container, Typography, Card, CardMedia, CardContent, CardActions, Button} from "@mui/material";
import Modal from '../../components/UI/funcModal/FunctionalProductPopup/FunctionalProductPopup';
import classes from './CardItems.module.css'

const Macbooks = ({macbooks, addToBasket}) => {
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
    const MacBookCards = () => {
        return(
            <div className={classes.Items}>
                <div>
                    <Typography
                        align={'center'}
                        gutterBottom variant="h3"
                    >
                        MacBooks
                    </Typography>
                </div>
                <Container >
                    <main >
                        {macbooks.map((item, index) => (
                            <MacBookCard item={item} key={item.id || index} addToBasket={addToBasket}/>
                        ))}
                    </main>
                </Container>
            </div>
        )
    }

    const MacBookCard = ({item}) => {
        return (
            <div className={classes.Item}>
                <Card sx={{maxWidth: 345}}>
                    <CardMedia
                        className={classes.img}
                        // image={'./img/items/' + this.props.item.img}
                        // image={'/static/images/' + this.prop s.item.img}
                        image={item.img}
                        component='img'
                        alt={item.alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h3' component='div'>
                            <h2 className={classes.title}>
                                {item.title}
                            </h2>
                        </Typography>
                        <Typography  variant='body2' component='div'>
                            <h2 className={classes.desc}>
                                {item.description}
                            </h2>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            variant='contained'
                            // className={classes.openModal}
                            // onClick={this.state}
                            onClick={() => toggleModal(item)}
                        >
                            Learn More
                        </Button>
                    </CardActions>

                </Card>

            </div>
        )
    }

    const ItemSpeck = ({selectedProduct}) => {
        return(
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

        )
    }

    return (
        <div>
            <MacBookCards />
            <Modal
                item={selectedProduct}
                show={showModal}
                closeModal={toggleModal}
            >
                {selectedProduct && (
                    <div
                        // className={classes.ModalItemBody}
                    >
                        <div className={classes.ModalHead}>
                            <Typography  className={classes.ModalCaption}>
                                {selectedProduct.title}
                            </Typography>
                        </div>
                        <div className={classes.ModalContentParent}>
                            <div className={classes.ModalContent}>
                                <img src={selectedProduct.img} alt={selectedProduct.alt}/>
                                <div className={classes.btnBox}>
                                    <Button size='small'
                                            variant='contained'
                                            onClick={() => {
                                                const handleAddToBasket = () => {
                                                    addToBasket(selectedProduct);
                                                    toggleModal();
                                                };
                                                handleAddToBasket();
                                            }}
                                            className={classes.addBtn}>Add to cart</Button>
                                </div>
                                <div className={classes.description}>
                                    <h2 className={classes.desc}>
                                        {selectedProduct.description}
                                    </h2>
                                </div>
                              {/*<ItemSpeck/>*/}

                            </div>
                        </div>
                    </div>
                )}

            </Modal>

        </div>

    )

}

export default Macbooks;