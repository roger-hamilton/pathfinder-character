import Reflux from 'reflux';
import Actions from './actions'

export default Reflux.createStore({
  init(){
    this.listenTo(Actions.loadData, this.load);
    this.listenTo(Actions.updateData, this.update);
  },
  load(){

    this.trigger('data');
  },
  update(data){
    console.log('loaded data: '+data);

    this.trigger(data);
  }
});
