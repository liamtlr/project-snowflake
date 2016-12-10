Template.NewProject.events({
  'submit #insertProjectForm'(event) {
    FlashMessages.sendInfo("Project created")
    FlowRouter.go('view-projects');
  },
});
