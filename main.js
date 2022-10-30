Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    image_qualiy: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function Capture() {

    Webcam.snap(function (data_uri) {
        result = document.getElementById("result");
        result.innerHTML = '<img id="image" src="' + data_uri + '">';
    });
}

console.log("ml5version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HjNK3PiTL/model.json", modelloaded);

function modelloaded() {
    console.log("Model has loaded");
}


function Check() {
    img = document.getElementById("image");
    classifier.classify(img, GotResult);
}

function GotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_person_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}