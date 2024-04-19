const image = document.getElementById('main_image');

image.src = 'img.png';

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/yhC63YJv5/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }

    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = " I can hear - " +
        results[0].label
        document.getElementById("result_confidence").innerHTML = "Accuracy - " +
        (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('Dog_Barking.gif');
        img1 = document.getElementById('Cat_Meowing.gif');
        img2 = document.getElementById('Cow_Mooing.gif');
        img3 = document.getElementById('Lion_Roaring.gif');

        if (results[0].label == "Barking") 
        {
           image.src = 'Dog_Barking.gif';

        }
        else if(results[0].label == "Meowing") 
        {
            image.src = 'Cat_Meowing.gif';

        }
        else if(results[0].label == "Mooing") 
        {
            image.src = 'Cow_Mooing.gif';
        }
        else
        {
            image.src = 'Lion_Roaring.gif';
        }


    }



}