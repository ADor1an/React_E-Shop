import React, {Component} from 'react';
// import Items from "../../components/Items/Items";
// import MBP14 from "../../images/ProductsImage/MB_pro_14_m1.jpg";
// import MBP16 from "../../images/ProductsImage/MB_pro_16_m1.jpg";
// import MBP13 from "../../images/ProductsImage/MB_pro_13_m1.jpg";
// import MBA from "../../images/ProductsImage/MB_air_m1.jpg";
// import MBP_I_16 from "../../images/ProductsImage/MB_pro_16.jpg";
import {Container, Typography} from "@mui/material";
// import Item from "../../components/Items/Item/Item";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import classes from './Macbooks.module.css';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// import Modal from '../../components/UI/funcModal/DModal';
import Modal from '../../components/UI/Modal/ModalWindowForItems';


class Macbooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedProduct: null
        }
    }
    

    toggleModal = (item) => {
        this.setState({ showModal: !this.state.showModal , selectedProduct: item });
            if (this.state.showModal) {
                document.body.style.overflowY = 'unset'
                this.setState({selectedProduct: null})
            }   else    {
                document.body.style.overflowY = 'hidden'
    
            }

    }


    render() {
        const {macbooks, addToBasket} = this.props
        const {selectedProduct } = this.state
        
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
                                onClick={() => this.toggleModal(item)}
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

                    <MacBookCards />

                    <Modal
                        item={this.state.selectedProduct}
                        show={this.state.showModal}
                        closeModal={this.toggleModal}
                    >
                        {selectedProduct && (
                            <div className={classes.ModalItemBody}>
                                <div className={classes.ModalHead}>
                                    <Typography  className={classes.ModalCaption}>
                                        {selectedProduct.title}
                                    </Typography>
                                </div>
                                <div className={classes.ModalContent}>
                                    <img src={selectedProduct.img} alt={selectedProduct.alt}/>
                                    <div className={classes.btnBox}>
                                        <Button size='small'
                                                variant='contained'
                                                onClick={() => {
                                                    const handleAddToBasket = () => {
                                                        addToBasket(selectedProduct);
                                                        this.toggleModal();
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
                                    {/*<ItemSpec classname={classes.specsList}/>*/}
                                {/**/}
                                </div>
                            </div>
                        )}

                    </Modal>

            </div>
        );
    }
}

export default Macbooks;