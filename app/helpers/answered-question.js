import Ember from 'ember';

export function answeredQuestion(params) {
  var question = params[0];
  if(question.get('answers').get('length') >= 1) {
    return Ember.String.htmlSafe("<i class='fa fa-comment'></i>");
  }
 else {
    return Ember.String.htmlSafe('<p class="noAnswers">No Answers Yet</p>');
  }
}

export default Ember.Helper.helper(answeredQuestion);
