import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
	queryFixtures: function(fixtures, query) {
		var prop = Object.keys(query);
		if (prop.contains('start')) {
			fixtures = fixtures.slice(
				query.start, 
				query.end);
		}
		return fixtures;
	}
});
/*
export default DS.LSAdapter.extend({
	 namespace: 'pizzaz',
	queryFixtures: function(fixtures, query) {
		var prop = Object.keys(query);
		if (prop.contains('start')) {
			fixtures = fixtures.slice(
				query.start, 
				query.end);
		}
		return fixtures;
	}
});
*/