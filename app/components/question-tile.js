import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: Ember.computed('question.answers', function() {
    if(this.get('question.answers').get('length') !==0)
      return this.get('question.answers').get('length');
  })
});
