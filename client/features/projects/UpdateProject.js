Template.UpdateProject.helpers({
    project: () => {
        var id = FlowRouter.getParam('id');
        return Projects.findOne({_id: id});
    }
});

Template.UpdateProject.events({
  'submit #updateProjectForm'(event) {
    FlowRouter.go('view-projects');
    FlashMessages.sendSuccess("Project updated");
  },
});
