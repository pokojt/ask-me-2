import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },
  actions: {
    saveNewLike(likeAnswer) {
      // alert("HEY");
      var newLike = this.store.createRecord('like', likeAnswer);
      var answer = likeAnswer.answer;
      answer.get('likes').addObject(newLike);
      newLike.save().then(function() {
        return answer.save();
      });
      this.transitionTo('question', question_id);
    }
  }
});
