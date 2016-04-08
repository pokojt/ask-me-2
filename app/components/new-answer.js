import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('answerFormShowing');
    },
    saveNewAnswer() {
      var formInputs = {
        author: this.get('author') ? this.get('author'):"",
        content: this.get('content') ? this.get('content'):"",
        question: this.get('question'),
      };
      this.toggleProperty('answerFormShowing');
      this.set('author', "");
      this.set('content', "");
      this.sendAction('saveNewAnswer', formInputs);
    }
  }
});
