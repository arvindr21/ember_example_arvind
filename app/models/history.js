import DS from 'ember-data';

var History = DS.Model.extend({
	pizza: DS.attr()
});

History.reopenClass({
	FIXTURES: []
});

export default History;