import React from 'react';
import Reflux from 'reflux';
import CharacterStore from './CharacterStore';
import Actions from './actions';
import Partition from './object-partition'

var App = React.createClass({
  mixins: [Reflux.connect(CharacterStore,"character")],

  render(){
    return (
      <div className="container">
        {this.state.character.name}
      </div>
    );
  }

});

console.log(Partition(
  { hello:'test1', world:'test2', test:'case'},
  { one: ['hello','test'], two: ['world']}
));

window.onbeforeunload = function(){
  Actions.save();
}

React.render(<App />, document.body);
