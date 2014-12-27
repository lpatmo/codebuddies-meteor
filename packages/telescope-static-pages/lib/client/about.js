Meteor.startup(function() {
	Router.map(function() {
		this.route('about', {
			path: '/about',
			template: getTemplate('aboutPage')
		});
	});
});

primaryNav.push('aboutLink');

heroModules.push({
  template: 'heroPage'
});

Meteor.startup(function () {
  Template[getTemplate('heroPage')].helpers({
    hasCategories: function(){
      return typeof Categories !== 'undefined' && Categories.find().count();
    },
    cat: function () {
      return __('categories')
    },
    categories: function(){
      return Categories.find({}, {sort: {order: 1, name: 1}});
    },
    categoryLink: function () {
      return getCategoryUrl(this.slug);
    }
  });
});

getCategoryUrl = function(slug){
  return getSiteUrl()+'category/'+slug;
};
