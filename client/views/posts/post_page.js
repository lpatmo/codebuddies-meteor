Template[getTemplate('post_page')].helpers({
  post_item: function () {
    return getTemplate('post_item');
  },
  post_body: function () {
    return getTemplate('post_body');
  },
  comment_form: function () {
    return getTemplate('comment_form');
  },
  comment_list: function () {
    return getTemplate('comment_list');
  },
  membersList: function() {
      return Meteor.users.find({_id: {$in: this.upvoters}});
  }
});

Template[getTemplate('post_page')].rendered = function(){
  $('body').scrollTop(0);
};
