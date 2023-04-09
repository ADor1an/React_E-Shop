import React, {Component, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Item.module.css'
import Modal from '../../UI/Modal/ModalItem';
// import Modal from '../../UI/funcModal/Modal';



class Item extends Component {

            // TODO    set this modal scroll on open
             constructor(props) {
                 super(props);
                 this.state = {
                     showModal: false,
                     selectedProduct: null,

                 }

                 // this.handleOpenModal = this.handleOpenModal.bind(this);
                 // this.handleCloseModal = this.handleCloseModal.bind(this);
             }

              toggleModal = (item) => {
                this.setState({showModal: !this.state.showModal , selectedProduct: item})
                  if (this.state.showModal) {
                      document.body.style.overflowY = 'unset'
                      this.setState({selectedProduct: null})
                  }   else    {
                      document.body.style.overflowY = 'hidden'

                  }
                  console.log(this.state.selectedProduct)
              }





    render() {
            const {item, addToBasket} = this.props
            const {selectedProduct} = this.state


            const ItemSpec = (props) => {
                return (

                    <div>
                        <Typography>{item.titleColor}</Typography>
                        <ol>
                            <li>{item.colorFirst}</li>
                            <li>{item.colorSecond}</li>
                        </ol>
                        <Typography>{item.titleChips}</Typography>
                        <ol>
                            <li>{item.chipF}</li>
                            <li>{item.chipT}</li>
                            <li>{item.chipTh}</li>
                        </ol>
                    </div>
                )
            }



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
                        <Typography gutterBottom variant='h5' component='div'>
                            <h2 className={classes.title}>
                                {item.title}
                            </h2>
                        </Typography>
                        <Typography  variant='body2' component='div'
                            // color='text.secondary'
                        >
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
                            onClick={this.toggleModal}
                        >
                            Learn More
                        </Button>
                    </CardActions>

                </Card>
                {this.state.showModal &&
                <Modal
                        item={selectedProduct}
                        onClose={this.toggleModal}
                        isOpen={this.toggleModal}
                >
                    { selectedProduct &&
                    <div className={classes.ModalBody}>
                        <div className={classes.ModalHead}>
                            <Typography className={classes.ModalCaption}>
                                {item.title}
                            </Typography>
                        </div>
                        <div className={classes.ModalContent}>
                            <img src={item.img} alt={item.alt}/>
                            <div className={classes.btnBox}>
                                <Button size='small'
                                        variant='contained'
                                        onClick={() => { addToBasket(selectedProduct); this.toggleModal}}
                                        className={classes.addBtn}>Add to cart</Button>
                            </div>
                            <div className={classes.description}>
                                <h2 className={classes.desc}>
                                    {item.description}
                                </h2>
                            </div>
                            <ItemSpec classname={classes.specsList}/>

                        </div>
                    </div>
                    }

                </Modal>
                }

            </div>
        )
    }
}

export default Item;
