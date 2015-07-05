import DS from "ember-data";

var Solution = DS.Model.extend({
  name: DS.attr('string'),
  version: DS.attr('string'),
  release: DS.attr('string'),
  status: DS.attr('integer')
});

Solution.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'solution_xyz',
    version: '1.0.0',
    release: '32',
    status: 200
  },{
    id: 2,
    name: 'solution_aaa',
    version: '0.0.8',
    release: '3',
    status: 300
  },{
    id: 3,
    name: 'solution_bbb',
    version: '0.4.2',
    release: '8',
    status: 200,
  },{
    id: 4,
    name: 'solution_ccc',
    version: '0.0.1',
    release: '1',
    status: 400,
  },{
    id: 5,
    name: 'solution_ddd',
    version: '0.0.1',
    release: '1',
    status: 500,
  }]
});

export default Solution ;

