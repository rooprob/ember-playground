import DS from "ember-data";

var Solution = DS.Model.extend({
  name: DS.attr('string'),
  version: DS.attr('string'),
  release: DS.attr('string')
});

Solution.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'solution_xyz',
    version: '1.0.0',
    release: '32'
  },{
    id: 2,
    name: 'solution_aaa',
    version: '0.0.8',
    release: '3'
  },{
    id: 3,
    name: 'solution_bbb',
    version: '0.4.2',
    release: '8'
  }]
});

export default Solution ;

