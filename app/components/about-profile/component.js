import Ember from 'ember';

var Component = Ember.Component.extend({
  overDiv: false,

  actions: {
    setActiveMenu: function() {
      console.log('caught by myself, passing on');
      return true;
    },
    over: function() {
      console.log('setActiveMenu');
      this.send('setActiveMenu', 'bob');

      this.toggleProperty('overDiv');
    },
    out: function() {
      console.log('setActiveMenu');
      this.send('setActiveMenu', 'fred');

      this.toggleProperty('overDiv');
    }
  }
});

export default Component ;
