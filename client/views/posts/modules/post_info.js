Template[getTemplate('postInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('member') : i18n.t('members');
  },
  can_edit: function(){
    return canEdit(Meteor.user(), this);
  },
  getTemplate: function() {
    return getTemplate("postAuthor");
  }
});