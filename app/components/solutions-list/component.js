import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    superAction: function(params) {
      this.sendAction('superAction', params);
    },
  },
});
