import React,{Component} from 'react';
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
      {
 
        1 + 1 === 2 ?(<div>맞아요</div>):(<div>틀려요</div>)
      }
      </div>
    )
  }
}

export default App;