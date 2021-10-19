
import React, {Component} from 'react';

class 카운터 extends Component {

    state = { 
        number: 0
    }

더하기 = () => {
    this.setState({
        number : this.state.number + 1
    });
}
빼기 = () => {
    this.setState({
        number : this.state.number - 1
    });
}

    render() { 

        return (
        <div>
            <h1>카운터d</h1>
            <div>값 : {this.state.number}</div>
            <button onClick={this.더하기} >+</button>
            <button onClick={this.빼기} >-</button>
        </div>

        );
    }
}
 
export default 카운터;