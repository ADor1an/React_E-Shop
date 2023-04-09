import React, {Component} from 'react';
import Item from "./Item/Item";
import {Container, Typography} from "@mui/material";
import classes from '../Items/Items.module.css';



class Items extends Component {

    render() {
        const cls =[
            classes.Items
        ]
            const {macbooks, addToBasket} = this.props
        return (
            <div className={cls.join(' ')}>
                <div>
                   <Typography align={'center'}>
                       <h1>Наші Товари</h1>
                   </Typography>
                </div>
                <Container >
                    <main >
                        {macbooks.map(item => (
                            <Item item={item} key={item.id} addToBasket={addToBasket}/>

                        ))}
                    </main>
                </Container>
            </div>
        );

        // return (
        //     <main>
        //         {this.props.specs.map(spec => (
        //             <Item spec={spec} key={spec.id}/>
        //         ))}
        //     </main>
        // )
    }
}

export default Items