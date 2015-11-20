var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    console.log(stdout);
}
var Leap = require("leapjs");


var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.fingers.length > 0){

      // frame contains fingers
      // https://developer.leapmotion.com/documentation/javascript/api/Leap.Frame.html#Frame

      //console.log(frame.fingers[2]);

      // fingers are represented as pointable obejcts.
      // https://developer.leapmotion.com/documentation/javascript/api/Leap.Pointable.html#Pointable

      finger = frame.fingers[1] ;

      console.log(finger.toString());

  }
});
