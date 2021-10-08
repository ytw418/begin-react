import React,{Component} from 'react';
import './App.css'
import Counter from './Counter';

import MyName from './MyName';

class App extends Component {
  render() {
    return(
          <div>
            <MyName name="lcaros"></MyName>
            <Counter></Counter>
            </div>
    )
  }
}

export default App;