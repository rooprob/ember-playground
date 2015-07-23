import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    state: { refreshModel: true }
  },

  model(params) {
    console.log("show-solution: inside my route!!!!!!!!!");
    console.log(params);
    var promises = {
      solution: this.store.find('solution', params.solution_id)
    };
    return Ember.RSVP.hash(promises) ;
  },

});
