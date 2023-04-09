import React, {Component} from 'react';
import classes from "./MacStudio.module.css";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import Modal from "../../components/UI/funcModal/DModal";

class MacPro extends Component {
    constructor(props) {
        super(props);
        this.state = {

            showModal: false,
            selectedProduct: null,
        }
    }
    toggleModal = (item) => {
        this.setState({showModal: !this.state.showModal, selectedProduct: item});
        // document.body.style.overflowY = 'hidden'
        if (this.state.showModal) {
            document.body.style.overflowY = 'unset'
            this.setState({selectedProduct: null})
        } else {
            document.body.style.overflowY = 'hidden'

        }
    }


    render() {
        const {macPro, addToBasket} = this.props
        const {selectedProduct} = this.state

        const MacPros = () => {
            return (
                <div className={classes.MSItems}>
                    <div>
                        <Typography align={'center'}  gutterBottom variant="h3" >Mac Pros</Typography>
                    </div>
                    <Container>
                        <main>
                            {macPro.map((item,index) => (
                                <MacProCard item={item} key={index} />
                            ))}
                        </main>
                    </Container>
                </div>
            )
        }


        const MacProCard = ({item}) => {
            return (
                <div className={classes.MSItem}>
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
                                // onClick={() => this.toggleModal(el)}
                                    onClick={() => this.toggleModal(item)}
                            >Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }


        return (
            <div>
                <MacPros/>

                <Modal
                    item={this.state.selectedProduct}
                    show={this.state.showModal}
                    closeModal={this.toggleModal}
                >
                    {selectedProduct && (
                        // <div className={classes.ModalBBody}>
                        <div>
                            <div className={classes.ModalHead}>
                                <Typography className={classes.ModalCaption}>{selectedProduct.title}</Typography>
                            </div>
                            <div className={classes.ModalContent}>
                                <figure>
                                    <img src={selectedProduct.img} alt={selectedProduct.title}/>
                                </figure>
                                <div className={classes.btnBox}>
                                    <Button size='small'
                                            variant='contained'
                                            className={classes.addBtn}>Add to cart</Button>
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
                    )
                    }

                </Modal>

            </div>
        );
    }
}

export default MacPro;