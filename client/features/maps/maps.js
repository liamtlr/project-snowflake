Template.map.helpers({

  getCoOrdinates: function() {
    var id = FlowRouter.getParam('id');
    var proj =  Projects.findOne({_id: id});
    return proj.location;
  },

});
