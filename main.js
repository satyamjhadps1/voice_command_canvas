x = 0;
y = 0;
draw_rect = " ";
draw_circle = " ";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML = "Computer is listening kindly speak or allow the mic";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech Recognized as:"+content ;
    if(content == "circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started Drawing Circle";
        draw_circle = "Set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started Drawing Rectangle";
        draw_rect = "Set";
    }
}
function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "Set"){
        radius = Math.floor(Math.random()*100)
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "There You GO! Circle Drawn.";
        draw_circle = " ";
    }
    
    if(draw_rect == "Set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "There You GO! Rectangle Drawn.";
        draw_rect = " ";
    }
}
