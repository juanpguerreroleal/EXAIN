import React from "react";
import {Link} from 'react-router-dom';
class AddButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {url: props.value}
    }
    render(){
        return (
            <Link className="rounded-circle add-button" to={this.state.url}>
                <h2>+</h2>
            </Link>
        );
    }
}
export default AddButton;