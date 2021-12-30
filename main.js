noseX = 0;
noseY = 0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/PNsrY17g/d3086558665c07c38cc8ebe8ed33003a-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("Posenet is working");
}

function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose , noseX, noseY, 35 , 35);
}

function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if (results.length > 0 ) {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

