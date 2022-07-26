x = 0;
y = 0;

draw_apple = "set";

var screen_width = window.innerWidth
var screen_height = window.innerHeight

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  
  to_number = Number(content);
  if(Number.isInteger(to_number))

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  canvas = createCanvas(1200, 400);
}

function draw() {

  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    Image(apple, x, y, 50, 50);

  }
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

    function preload(){

    }
