function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AHaWpsiLI/model.json', modelReady);
}   

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }

    else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
         
        document.getElementById("name").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(3)+" %";
        document.getElementById("name").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style.color = "rgb("+r+","+g+","+b+")";
    
        img = document.getElementById("A1");
        img1 = document.getElementById("A2");
        img2 = document.getElementById("A3");
        img3 = document.getElementById("A4");

        if (results[0].label =="Clap"){
            img.src = "aliens-01.gif";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }

        else if (results[0].label == "Bell"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }

        else if (results[0].label == "Snap"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.gif";
            img3.src = "aliens-04.png";
        }

        else {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif";
        }
    }
}