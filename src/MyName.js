import React, {Component} from 'react';

class MyName extends Component{
    render() {
        return(
            <div>hi {this.props.name}</div>
        );
    }
}

MyName.defaultProps = {
    name:'기본이름'
};

export default MyName;