import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(favorite){
    this.get('favorites').pushObject(favorite);
  }
});
