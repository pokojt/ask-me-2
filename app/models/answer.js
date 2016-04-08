import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  date: DS.attr(),
  likes: DS.hasMany('like', {async: true})
});
