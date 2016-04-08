import Ember from 'ember';
import moment from 'moment';


export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('questionFormShowing');
    },
    saveQuestion() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDate = moment(date).format('MM/DD/YYYY');
      var formInputs = {
        content: this.get('content') ? this.get('content'):"",
        author: this.get('author') ? this.get('author'):"",
        notes: this.get('notes') ? this.get('notes'):"",
        date: momentDate,
      };
      this.toggleProperty('questionFormShowing');
      this.set('content', "");
      this.set('author',"");
      this.set('notes',"");
      this.sendAction('saveQuestion', formInputs);
    }
  }
});
