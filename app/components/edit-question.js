import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('editFormShowing');
    },
    saveQuestionEdit(question) {
      var formInputs = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.toggleProperty('editFormShowing');
      this.sendAction('saveQuestionEdit', question, formInputs);
    }
  }
});
