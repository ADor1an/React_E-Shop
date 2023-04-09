import React, {Component} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import classes from './Displays.module.css'
import Modal from '../../components/UI/funcModal/DModal';
import {TransitionGroup, CSSTransition} from 'react-transition-group';



class Displays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal : false,
            selectedProduct: null,

        }

        // this.addToOrder = this.addToOrder.bind(this)

        }




    toggleModal = (item) => {
        this.setState({ showModal: !this.state.showModal , selectedProduct: item });
        // document.body.style.overflowY = 'hidden'
        if (this.state.showModal) {
            document.body.style.overflowY = 'unset'
            this.setState({selectedProduct: null})
        }   else    {
            document.body.style.overflowY = 'hidden'

        }

        // this.setState({ showModal: !this.state.showModal , selectedProduct: display });
    }
    // hideModal = () => {
    //     this.setState({ showModal: false, selectedProduct: null });
    //     document.body.style.overflowY = 'unset'
    //
    //
    // }

    render() {

        const {displays, addToBasket} = this.props
        const {selectedProduct } = this.state



        const DisplayCardS = () => {
            return (
                <div className={classes.DItems}>
                    <div>
                        <Typography align={'center'}  gutterBottom variant="h3" >Our Monitors</Typography>
                    </div>
                    <Container>
                        <main>
                            {displays.map((item,index) => (
                                <DisplayCard item={item} key={index}/>
                            ))}
                        </main>
                    </Container>
                </div>
            )
        }


        const DisplayCard = ({item}) => {
            return (
                <div className={classes.DItem}>
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



               <DisplayCardS/>
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
                                            className={classes.addBtn}
                                            onClick={() => {
                                                // addToBasket(selectedProduct);
                                                // this.toggleModal()
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
        )
    }
}

export default Displays;