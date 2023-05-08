/* https://teachablemachine.withgoogle.com/models/WAnK1IN31/ */
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    
    });
    camera=document.getElementById("camera")
    Webcam.attach("#camera")
    function take_snapshot(){{
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
        })
    }}
    console.log("ml5version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WAnK1IN31/model.json",modleready)
    
    function modleready(){
        console.log("modleisreadytofire")
    }
    
    
    
    
    p1="";
    p2="";
    
    function speak(){
        var synth=window.speechSynthesis;
       sd1="the frist prediction is "+p1;
       sd2="the seconed prediction is "+p2 
       var utterthis=new SpeechSynthesisUtterance(sd1+sd2);
       synth.speak(utterthis)
    }
    
    
    
    