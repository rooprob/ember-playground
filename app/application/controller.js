import Ember from 'ember';


export default Ember.Controller.extend({
  activeMenu: 'thing',
  state: 'all',
  queryParams: [
    'state',
  ],

  actions: {
    setActiveMenu: function(menu) {
      this.set('activeMenu', menu);
      console.log("set active menu to " + menu);
    }
  }
})
