Meteor.methods({
  'deleteProject'(id){
    Projects.remove({_id: id});
    FlashMessages.sendInfo("Project deleted")

  },
  'updateProjectVolunteers'(id, currentUserId){
    Projects.update({_id: id}, {$push: {volunteers: currentUserId}});
    FlashMessages.sendInfo("Thanks for volunteering")
  },
});
