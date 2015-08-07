import React from 'react';
import Reflux from 'reflux';
import CharacterStore from './stores'
import Actions from './actions'


class App extends React.Component{
  constructor(props) {
    super(props);
    CharacterStore.listen(this.update);
  }

  update(data){
    console.log(data);
  }

  componentDidMount (){
    console.log('hello');
    Actions.loadData();
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <h1>Hello from React</h1>
        </div>
      </div>
    );
  }
}

React.render(<App />, document.body);
