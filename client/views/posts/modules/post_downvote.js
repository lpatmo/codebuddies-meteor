Template[getTemplate('postDownvote')].helpers({
  downvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.downvoters, user._id);
  },
  oneBasedRank: function(){
    if(typeof this.rank !== 'undefined')
      return this.rank - 1;
  }
});


Template[getTemplate('postDownvote')].events({
  'click .downvote-link': function(e, instance){
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('downvotePost', post, function(error, result){
      trackEvent("post downvoted", {'_id': post._id});
    });
  }
});