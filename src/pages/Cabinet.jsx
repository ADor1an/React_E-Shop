import React, {Component} from 'react';
import Items from "../components/Items/Items";
// import Item from "../components/Items/Item/Item";

class Cabinet extends Component {
    render() {
        return (
            <div>

                <Items items={this.state.items}/>



            </div>
        );
    }
}

export default Cabinet;