function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPose(results){
    if(results>0){
        console.log(results);
    }
}