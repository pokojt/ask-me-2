import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedQuestions: Ember.computed.sort('model', 'sortBy'),
});
