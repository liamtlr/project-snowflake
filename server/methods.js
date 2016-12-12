Meteor.methods({

  'makeApiCall'(projectLocation, userLocation){
    var partOne = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="
    var partTwo = "&destinations="
    var partThree = "&key=AIzaSyAqB3snrGRRRSgCH2B6ymISjj59hBRaE2I";
    var request = partOne + projectLocation + partTwo + userLocation + partThree;
    var test = Meteor.http.call("GET", request, {}, function( error, response ) {
  if ( error ) {
    console.log( error );
  } else {
    console.log( response );
    console.log("???????????????");
  }
  return "Please give us something";
});

  },

})
