import DS from 'ember-data';

var Pizza = DS.Model.extend({
	name: DS.attr('string'),
	image: DS.attr('string'),
	description: DS.attr('string')
});

Pizza.reopenClass({
	FIXTURES: [{
    'id': 0,
    'name': 'Pizza One',
    'image': 'imgs/1.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
}, {
    'id': 1,
    'name': 'Pizza Two',
    'image': 'imgs/2.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
}, {
    'id': 2,
    'name': 'Pizza Three',
    'image': 'imgs/3.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
}, {
    'id': 3,
    'name': 'Pizza Four',
    'image': 'imgs/4.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
},{
    'id': 4,
    'name': 'Pizza Five',
    'image': 'imgs/4.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
}, {
    'id': 5,
    'name': 'Pizza Six',
    'image': 'imgs/3.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
}, {
    'id': 6,
    'name': 'Pizza Seven',
    'image': 'imgs/3.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
}, {
    'id': 7,
    'name': 'Pizza Eight',
    'image': 'imgs/8.jpg',
    'description': 'Contains, nonummy nibh, euismod tincidunt ut, laoreet dolore magna '
}]
});

export default Pizza;