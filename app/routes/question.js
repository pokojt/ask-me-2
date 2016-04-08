import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveQuestionEdit(question, formInputs) {
      Object.keys(formInputs).forEach(function(key) {
        if(formInputs[key]!==undefined) {
          question.set(key, formInputs[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    saveNewAnswer(formInputs) {
      var newAnswer = this.store.createRecord('answer', formInputs);
      var question = formInputs.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', formInputs.question);
    }
  }
});
