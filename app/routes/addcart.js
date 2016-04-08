import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      carts: this.store.findAll('cart'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {

    saveCart(params){
  console.log("Ac:", params);
      var newCart = this.store.createRecord('cart', params);
      newCart.save();
      this.transitionTo('index');
    }
  }
});
