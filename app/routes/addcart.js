import Ember from 'ember';

export default Ember.Route.extend({
  return Ember.RSVP.hash({
    carts: this.store.findAll('cart'),
    reviews: this.store.findAll('review')
  });

  actions: {
    saveCart(params){
      var newCart = this.store.createRecord('cart', params);
      newCart.save();
      this.transitionTo('index');
    }
  }
});
