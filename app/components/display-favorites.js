import Ember from 'ember';

export default Ember.Component.extend({
  myFavorites: Ember.inject.service(),

  actions: {
    removeFromFavorites(favorite) {
      if(confirm("Are you sure you want to remove this from your favorites?")) {
        this.sendAction('removeFromFavorites', favorite);
      }
    }
  }
});
