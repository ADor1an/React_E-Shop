import { useState } from 'react';
import classes from './CardItems.module.css'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import Modal from "../../components/UI/funcModal/FunctionalProductPopup/FunctionalProductPopup";

const MacMini = ({ mMini, addToBasket }) => {
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

    const MacMiniCards = () => {
        return(
            <div className={classes.Items}>
                <div>
                    <Typography align={'center'} gutterBottom variant="h3" >Mac minis</Typography>
                </div>
                <Container>
                    <main>
                        {mMini.map((item, index) => (
                            <MacMiniCard item={item} key={item.id || index} addToBasket={addToBasket}/>
                        ))}
                    </main>
                </Container>
            </div>

        )
    }

    const MacMiniCard = ({ item }) => {
        return (
            <div className={classes.Item}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        height="220"
                        image={item.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component='div'>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"
                                onClick={() => toggleModal(item)}
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <MacMiniCards/>
            <Modal
                item={selectedProduct}
                show={showModal}
                closeModal={toggleModal}
            >
                {selectedProduct && (
                    <div>
                        <div className={classes.ModalHead}>
                            <Typography className={classes.ModalCaption}
                            >
                                {selectedProduct.title}
                            </Typography>
                        </div>

                        <div className={classes.ModalContentParent}>
                            <div className={classes.ModalContent}>
                                <figure>
                                    <img src={selectedProduct.img} alt={selectedProduct.title} />
                                </figure>
                                <div className={classes.btnBox}>
                                    <Button size='small'
                                            variant='contained'
                                            className={classes.addBtn}
                                            onClick={() => {
                                                const handleAddToBasket = () => {
                                                    addToBasket(selectedProduct);
                                                    toggleModal();
                                                };
                                                handleAddToBasket();
                                            }}
                                    >
                                        Add to cart
                                    </Button>
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
                                        <li>{selectedProduct.processor}</li>
                                        <li>{selectedProduct.gpu}</li>
                                        <li>{selectedProduct.ram}</li>
                                        <li>{selectedProduct.memBand}</li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MacMini;
