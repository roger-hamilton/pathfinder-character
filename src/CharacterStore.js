import Reflux from 'reflux';
import Actions from './actions';
import assign from 'object-assign';

export default Reflux.createStore({
  init(){
    this.listenTo(Actions.newCharacter, this.newCharacter);
    this.listenTo(Actions.load, this.load);
    this.listenTo(Actions.update, this.update);
    this.listenTo(Actions.save, this.save);
    this._character = this.getInitialState();
  },

  getInitialState(){
    return { name: 'Test' };
  },

  newCharacter(){
    this._character = getInitialState();
    this.trigger(this._character);
  },

  save(){
    localStorage['character'] = JSON.stringify(this._character);
  },

  load(){
    var local = localStorage['character'];
    this._character = local ? JSON.parse(local) : this._character;
    this._character.name +=' Click';
    this.trigger(this._character);
  },

  update(data){
    this._character = assign(this._character, data);
    this.trigger(this._character);
  }
});
