import Ember from 'ember';

export default Ember.Route.extend({
  myFavorites: Ember.inject.service(),

  actions: {
    removeFromFavorites(favorite) {
      this.get('myFavorites').remove(favorite);
      this.refresh('myFavorites.favorites');
    }
  }
});
