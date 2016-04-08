import Ember from 'ember';

export default Ember.Component.extend({
  myFavorites: Ember.inject.service(),

  actions: {
    deleteQuestion(question){
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    },
    addToFavorites(favorite){
      this.get('myFavorites').add(favorite);
    }
  }
});
