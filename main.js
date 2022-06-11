noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);
video.position(25, 150);

canvas = createCanvas(550,500);
canvas.position(700, 150);

poseNet = ml5.poseNet(video, model_loaded);

poseNet.on('pose', got_poses);
}

function draw()
{
background('#e97451');

document.getElementById("square_sides").innerHTML = "width and hight of a square is ="+difference+"px";

fill('blue');
stroke('green');
square(noseX, noseY, difference);
}

function model_loaded()
{
console.log("poseNet is initialised");
}

function got_poses(results)
{
if (results.length > 0)
{
console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nosex = "+noseX+ ", noseY = "+ noseY);

leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.rightWrist.x;
difference = floor(leftwristX - rightwristX);
console.log("leftwristX = "+leftwristX+" , rightwristX = "+rightwristX+" , difference = "+difference+"px");

}
}

