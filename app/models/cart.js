import DS from 'ember-data';

export default DS.Model.extend({
  cartName: DS.attr(),
  foodType: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  isMobile: DS.attr(),
  homeCity: DS.attr(),
  homeLocation: DS.attr(),
  picture: DS.attr(),

});
