import Ember from 'ember';

var computed = Ember.computed;
export default Ember.Component.extend({
  solution: computed(function(){
    console.log("this solution is ....");
    console.log(this.get('solution'));
    return this.get('solution');
  }),
});
