Meteor.startup(function() {
	Router.map(function() {
		this.route('about', {
			path: '/about',
			template: getTemplate('aboutPage')
		});
	});
	Template[getTemplate('heroPage')].helpers({
		isHomePage: function() {
			if (Router.current().location.get().path == '/') {
				return true;
			} else {
				return false;
			}
		}
	});
});

heroModules.push({
 				 template: 'heroPage'
});

primaryNav.push('aboutLink');



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
