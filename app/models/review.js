import DS from 'ember-data';

export default DS.Model.extend({
  reviewText: DS.attr(),
  foodRating: DS.attr(),
  valueRating: DS.attr(),
  seenAt: DS.attr(),
  date: DS.attr().
  reviewedBy: DS.attr(),
  cart: DS.belongsTo('cart', {async: true})

});
