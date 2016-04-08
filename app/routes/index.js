import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      carts: this.store.findAll('cart'),
      reviews: this.store.findAll('review')
    });
  }
});
