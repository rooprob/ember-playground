import Ember from 'ember';

export default Ember.Component.extend({
  overDiv: false,

  actions: {
    over: function() {
      this.toggleProperty('overDiv');
    },
    out: function() {
      this.toggleProperty('overDiv');
    }
  }


});
