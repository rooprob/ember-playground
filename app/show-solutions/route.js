import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("show-solutions: inside my route!!!!!!!!!");
    console.log(params);
    var promises = {
      all: this.store.findAll('solution'),
    };
    return Ember.RSVP.hash(promises) ;
  }
});
