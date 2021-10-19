import React,{Component} from 'react';
import './App.css'

import 카운터 from './카운터';

import MyName from './MyName';

class App extends Component {
  render() {
    return(
          <div>
            <MyName name="lcaros"></MyName>
            <카운터></카운터>
            </div>
    )
  }
}

export default App;