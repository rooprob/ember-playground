import Ember from 'ember';


export default Ember.Controller.extend({
  activeMenu: 'thing',
  state: 'all',
  queryParams: [
    'state',
  ]

});
