import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCart() {
      var params = {
        cartName: this.get('cartName'),
        foodType: this.get('foodType'),
        isMobile: this.get('isMobile'),
        homeCity: this.get('homeCity'),
        homeLocation: this.get('homeLocation'),
        picture: this.get('picture'),
      };
      this.sendAction('saveCart', params);
    }
  }
});
