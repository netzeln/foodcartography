import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('addcart');
  this.route('foodcart', {path: '/foodcart/:food_id'});
});

export default Router;
