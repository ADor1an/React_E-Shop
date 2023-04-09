import React, {Component} from 'react';
import classes from './MacStudio.module.css'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import Modal from "../../components/UI/funcModal/DModal";

class MacMini extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // basket: this.props.basket,
            selectedProduct: null,
            showModal: false,
        }
    }


    toggleModal = (mM) => {
        this.setState({ showModal: !this.state.showModal , selectedProduct: mM });
        // document.body.style.overflowY = 'hidden'
        if (this.state.showModal) {
            document.body.style.overflowY = 'unset'
            this.setState({selectedProduct: null})
        }   else    {
            document.body.style.overflowY = 'hidden'

        }

        // this.setState({ showModal: !this.state.showModal , selectedProduct: display });
    }


    render() {
        const {mMini, addToBasket} = this.props
        const {selectedProduct} = this.state

        const MacMiniCardS = () => {
            return (
                <div className={classes.MSItems}>
                    <div>
                        <Typography align={'center'}  gutterBottom variant="h3" >Mac minis</Typography>
                    </div>
                    <Container>
                        <main>
                            {mMini.map((mM,index) => (
                                <MacMiniCard mM={mM} key={index} />
                            ))}
                        </main>
                    </Container>
                </div>
            )
        }


        const MacMiniCard = ({mM}) => {
            return (
                <div className={classes.MSItem}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={mM.title}
                            height="220"
                            image={mM.img}
                            // title={mM.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component='div'>
                                    {mM.title}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"
                                // onClick={() => this.toggleModal(el)}
                                    onClick={() => this.toggleModal(mM)}
                            >Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        return (
            <div>

                <MacMiniCardS/>

                <Modal
                    item={this.state.selectedProduct}
                    show={this.state.showModal}
                    closeModal={this.toggleModal}
                >
                    {selectedProduct && (
                        // <div className={classes.ModalBBody}>
                        <div>
                            <div className={classes.ModalHead}>
                                <Typography className={classes.ModalCaption}
                                            gutterBottom
                                            variant="h3"
                                >{selectedProduct.title}</Typography>
                            </div>
                            <div className={classes.ModalContent}>
                                <figure>
                                    <img src={selectedProduct.img} alt={selectedProduct.title}/>
                                </figure>
                                <div className={classes.btnBox}>
                                    <Button size='small'
                                            variant='contained'
                                            className={classes.addBtn}
                                            onClick={() => {
                                                const handleAddToBasket = () => {
                                                    addToBasket(selectedProduct);
                                                    this.toggleModal();
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
                                        <li>{selectedProduct.processor}</li>
                                        <li>{selectedProduct.gpu}</li>
                                        <li>{selectedProduct.ram}</li>
                                        <li>{selectedProduct.memBand}</li>
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

export default MacMini;