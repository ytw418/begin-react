import React, {Component} from 'react';

class Counter extends Component{

    state = {
        number: 0,
        error: false
      }

      componentDidCatch(error, info) {
        this.setState({
          error: true
        });
      }
      

//라이프 싸이클


//라이프 싸이클


handleIncrease = () => {
    this.setState({
        number: this.state.number + 1
    });
}

handleDecrease = () => {
    this.setState({
        number: this.state.number - 1
    });
}



    render() {
       

        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
               
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;
