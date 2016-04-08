import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },

  actions: {
    newLike: false,
    likeThisAnswer() {
      var likeAnswer = {
        answer: this.get('answer'),
      };
      this.set('newLike', true);
      this.sendAction('saveNewLike', likeAnswer);
    },
    unlikeThisAnswer() {
      this.sendAction('removeLike');
      this.set('newLike', false);
    }
  }
});
