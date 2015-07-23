import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    superAction: function(params) {
      console.log("superAction");
      console.log(params)
    },
  }

});
