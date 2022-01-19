var SpeechRecogniton = window.webkitSpeechRecogniton;


var recogniton = new SpeechRecogniton();
function start(){
 document.getElementById("textbox").innerHTML = "";
 recogniton.start()
}
recogniton.onresult = function (event){
 console.log(event);

 var Content = event.results[0][0].transcript;

 document.getElementById("textbox").innerHTML = Content;
 console.log(Content);
 if(Content == "take my selfie"){
     console.log("taking selfie");
     speak();
 }
  
}
function speak(){
 var synth = window.speechSynthesis;
 speak_data = "Taking your Selfie in five seconds";
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 Webcam.attach(camera);

 setTimeout(function()
 {
     take_snapshot();
     save();
 } , 5000);

}
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");

