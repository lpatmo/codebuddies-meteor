Template[getTemplate('postDomain')].helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    //return a.hostname;
    return a
  }
});

Template[getTemplate('postDomain')].events({

	'click .hangout-button': function(e, instance){
    var post = this;
	    if(!Meteor.user()){
	      e.preventDefault();
	      Router.go('atSignIn');
	      flashMessage(i18n.t("please_log_in_first"), "info");
	  	}
    }
  });

