Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    image_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture image" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/p1MFvgQXO/model.json',modelLoaded);
function modelLoaded(){
    console.log('model loaded')
}
function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotResult);
}
function gotResult(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2)
    }
}