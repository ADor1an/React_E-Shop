import React, {Component} from 'react';
import classes from "./MacStudio.module.css";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import Modal from "../../components/UI/funcModal/DModal";

class Monoblocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monobloks: [

                {
                    title: 'Apple iMac 27" 5K 2020',
                    resolution: '5120x2880 (16:9) Retina 5K ',
                    bright: '500 nits',
                    procFirstMod: 'intel core i5:(10500/10600)',
                    procSecondMod: 'intel core i7:(10700K)',
                    procThirdMod: 'intel core i9:(10910)',
                    graphic: 'Radeon Pro 5300/5500XT/5700XT',
                    camera: '1080p FaceTime HD',
                    wifi: 'WIFI5',
                    bluetooth: '5v',
                    ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
                    ram: '8GB/16GB/32GB/64GB/128GB',
                    ramSlots: '4',
                    ssd: 'from 256GB to 2048gb ',
                    videoRam: 'from 4GB in Radeon Pro 5300 to 16GB in Radeon Pro 5700XT',
                    img: 'https://m.ua/jpg_zoom1/1850116.jpg'
                },
                {
                    title: 'Apple iMac 21.5" 4K 2019',
                    resolution: '4096x2304 (16:9) Retina 5K ',
                    bright: '500 nits',
                    procFirstMod: 'intel core i3:(8100B)',
                    procSecondMod: 'intel core i5:(8500B)',
                    procThirdMod: 'intel core i7:(8700B)',
                    graphic: 'Radeon Pro 555X/560X/Vega 20',
                    camera: '1080p FaceTime HD',
                    wifi: 'WIFI5',
                    bluetooth: '4.2v',
                    ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
                    ram: '8GB/16GB/32GB',
                    ramSlots: 'embedded',
                    ssd: 'from 256GB to 1024GB ',
                    videoRam: 'from 2GB in Radeon Pro 555X to 4GB in Radeon Pro 560X and Vega 20 ',
                    img: 'https://mzimg.com/big/t1/g1ggupwdyt1.jpg'
                },
                {
                    title: 'Apple iMac 27" 5K 2019 ',
                    resolution: '5120x2880 (16:9) Retina 5K ',
                    bright: '500 nits',
                    procFirstMod: 'intel core i5:(9600K)',
                    // procSecondMod: 'intel core i7:(10700K)',
                    // procThirdMod: 'intel core i9:(10910)',
                    graphic: 'Radeon Pro 580X',
                    camera: '1080p FaceTime HD',
                    wifi: 'WIFI5',
                    bluetooth: '4.2v',
                    ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
                    ram: '8GB/16GB/32GB/64GB/128GB',
                    ramSlots: '4',
                    ssd: 'from 256GB to 2048GB ',
                    videoRam: '8GB',
                    img: 'https://mzimg.com/big/l1/g1ggtxkjfl1.jpg'
                },
                {
                    title: 'Apple iMac 27" 5K 2017',
                    resolution: '5120x2880 (16:9) Retina 5K ',
                    bright: '500 nits',
                    procFirstMod: 'intel XEON W-2140B',
                    procSecondMod: 'intel core i7:(10700K)',
                    procThirdMod: 'intel core i9:(10910)',
                    graphic: 'Radeon Pro Vega 56',
                    camera: '1080p FaceTime HD',
                    wifi: 'WIFI5',
                    bluetooth: '4.2v',
                    ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 4, Thunderbolt v3 - 4',
                    ram: '8GB/16GB/32GB/64GB',
                    ramSlots: '4',
                    ssd: 'from 256GB to 2048gb ',
                    videoRam: '8GB',
                    img: 'https://m.ua/jpg_zoom1/1127968.jpg'
                },
                {
                    title: 'Apple iMac 24" 2021',
                    resolution: '4480x2520 (16:9) Retina 4,5K ',
                    bright: '500 nits',
                    procFirstMod: 'Apple Silicone M1 8 cores',
                    // procSecondMod: 'intel core i7:(10700K)',
                    // procThirdMod: 'intel core i9:(10910)',
                    graphic: 'Apple Silicone M1 7-Core/ M1 8-Core',
                    camera: '1080p FaceTime HD',
                    wifi: 'WIFI6',
                    bluetooth: '5v',
                    ports: 'USB4 - 2, Thunderbolt v3 - 2',
                    ram: '8GB/16GB',
                    ramSlots: '4',
                    ssd: 'from 256GB to 2048gb ',
                    videoRam: 'Combined memory',
                    img: 'https://m.ua/jpg_zoom1/2037928.jpg'
                },


            ],
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
        const {selectedProduct} = this.state

        const Monoblocs = () => {
            return (
                <div className={classes.MSItems}>
                    <div>
                        <Typography align={'center'}  gutterBottom variant="h3" >Mac minis</Typography>
                    </div>
                    <Container>
                        <main>
                            {this.state.monobloks.map((item,index) => (
                                <MonoblocCard item={item} key={index} />
                            ))}
                        </main>
                    </Container>
                </div>
            )
        }


        const MonoblocCard = ({item}) => {
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
                <Monoblocs/>

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

export default Monoblocks;