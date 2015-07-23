import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('show-solutions', { path: '/' }, function(){ });
  this.route('show-solution', { path: '/solution/:solution_id' }, function(){ });
  this.route('about-profile', { path: '/about' }, function() { });
});

export default Router;
