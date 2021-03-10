var noseX = 0;
var noseY = 0;
var headX = 0;
var headY = 0;
function preload(){
 clownNose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
 clownHat = loadImage("https://i.postimg.cc/gktPs9jX/clown-hat.png");
}
function setup(){
 canvas = createCanvas(400, 400);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(400, 400);
 video.hide();
 poseNet = ml5.poseNet(video, model_loaded);
 poseNet.on("pose", got_poses);
}
function draw(){
 image(video, 0, 0, 400, 400);
 image(clownNose, noseX, noseY, 30, 30);
 image(clownHat, headX, headY, 150, 200);
}
function take_photo(){
 save("selfie.png");
}
function model_loaded(){
 console.log("Model Loaded");
 console.log("PoseNet Initialised");
}
function got_poses(results){
 if(results.length > 0){
  noseX = results[0].pose.nose.x - 15;
  noseY = results[0].pose.nose.y - 15;
  headX = results[0].pose.leftEye.x - 100;
  headY = results[0].pose.leftEye.y - 200;
  console.log(results);
  console.log("Nose X = " + results[0].pose.nose.x + " Y = " + results[0].pose.nose.y);
  console.log("Left Eye X = " + results[0].pose.leftEye.x + " Y = " + results[0].pose.leftEye.y);
 }
}