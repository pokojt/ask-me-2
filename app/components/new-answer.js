import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('answerFormShowing');
    },
    saveNewAnswer() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDate = moment(date).format('MM/DD/YYYY');
      var formInputs = {
        author: this.get('author') ? this.get('author'):"",
        content: this.get('content') ? this.get('content'):"",
        question: this.get('question'),
        date: momentDate,
      };
      this.toggleProperty('answerFormShowing');
      this.set('author', "");
      this.set('content', "");
      this.sendAction('saveNewAnswer', formInputs);
    }
  }
});
