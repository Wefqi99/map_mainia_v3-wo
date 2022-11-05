const e = require("express");
const { response, json } = require("express");
var gMap
var score;


function initApp() {
    console.log("Map Mainia Starting...")
    start()

    


    

    let hintOne = [
        "Hair capital of the world",
        "Ketchup on hotdogs arent allowed",
        "The capital of this country is named Tirana",
        "Pizza capital of the world",
        "Man-made city",
        "Kind of a state but not really",
        "The only place colder than chicago",
        "Holds one of the 7 wonders of the world",
        "Close to where all Aberhamic faiths originate from",
        "Famous place to vacation during winter"
    ];

    let hintTwo = [
        "Named after a flightless brid",
        "Not home of the Willis Tower",
        "Part of the Balkan Peninsula",
        "The home of cheese and wine",
        "Famous UFC fight location",
        "Summer weather no matter the time of year",
        "Has a twin",
        "One of the worlds leaders in Oil Production",
        "Bordered with Jordan",
        "Most hotels in one city"
    ];

    hintOne.forEach(function(item){
        let o = document.createElement("option");
        o.text = item;
        o.value = item;
        HintSetOne.appendChild(o);
    })

    hintTwo.forEach(function(hint) {
        let h = document.createElement("option");
        h.text = hint;
        h.value = hint;
        HintSetTwo.appendChild(h)
    })

    var modal = document.getElementById("myModal");

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }

    



}

async function start()  {
    try {
        const response = await fetch('/send')
        const data = await response.json()

    } catch {
        console.log("There was an issue fetching the data")
    }

}

async function getData() {
    const response = await fetch("/send")
    return response.json()
}



function mapPoints(data) {
    var jsonArray = Object.values(data.places)
    for (let i = 0; i < jsonArray.length; i++) {
        var name = jsonArray[i].name
        var lattitude = jsonArray[i].lattitude
        var longitude = jsonArray[i].longitude
        var marker = new google.maps.Marker({position: {lat: lattitude, lng: longitude}, map:gMap, title: name});
        marker.setIcon('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png')
    }
}



function initMap() {

    var btn = document.getElementById("myBtnTwo");

    btn.addEventListener("click", function () {
        console.log("button was clicked")
        fetch("/send").then(response => response.json()).then(data => {
            mapPoints(data)
        })
    })

    
    score = 0;
    

    

    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.6303, lng: 87.8539}, zoom: 3});

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
        findLocations()
        var variableZoom = aqurieZoom() 

    });

    
} 


function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:31.9794,lng:35.2619}) && zoomLevel == 8) {
        inBounds = true;
        alert("you found pali")
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);

}

function findLocations() {
    console.log("starting findLocations")
    fetch("/send").then(response => response.json()).then(data => {
        var zoomLevel = gMap.getZoom()
        
        document.querySelector("#scoreNumber").innerHTML = "Score: " + score

        document.querySelector("#zoomNumber").innerHTML = "Zoom Level: " + zoomLevel


        var jsonArray = Object.values(data.places)

        if (gMap.getBounds().contains({lat: jsonArray[0].lattitude, lng : jsonArray[0].longitude}) && (zoomLevel == 8)) {
            console.log("you found Istanbul")
            alert("You found Istanbul: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
        }
            

        if (gMap.getBounds().contains({lat: jsonArray[1].lattitude, lng : jsonArray[1].longitude}) && (zoomLevel == 8)) {
            console.log("you found chicago")
            alert("You found Chicago: + 10pts")
            score = score + 10;
            console.log(score)
            //gMap.setZoom(3)
            console.log(score)
            resetMap()
            
        }

        if (gMap.getBounds().contains({lat: jsonArray[2].lattitude, lng : jsonArray[2].longitude}) && (zoomLevel == 8)) {
            console.log("you found Abainia")
            alert("You found Albaina: + 10pts")
           //gMap.setZoom(3)
           score = score + 10;
           console.log(score)
           resetMap()
        }

        if (gMap.getBounds().contains({lat: jsonArray[3].lattitude, lng : jsonArray[3].longitude}) && (zoomLevel == 8)) {
            console.log("you found Italy")
            alert("You found Italy: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
        }


        if (gMap.getBounds().contains({lat: jsonArray[4].lattitude, lng : jsonArray[4].longitude}) && (zoomLevel == 8)) {
            console.log("you found Dubai")
            alert("You found Dubai: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
        }

        if (gMap.getBounds().contains({lat: jsonArray[5].lattitude, lng : jsonArray[5].longitude}) && (zoomLevel == 8)) {
            console.log("you found Puerto Rico")
            alert("You found Puerto Rico: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
        }

        if (gMap.getBounds().contains({lat: jsonArray[6].lattitude, lng : jsonArray[6].longitude}) && (zoomLevel == 8)) {
            console.log("you found Antartica")
            alert("You found Antartica: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
        }

        if (gMap.getBounds().contains({lat: jsonArray[7].lattitude, lng : jsonArray[7].longitude}) && (zoomLevel == 8)) {
            console.log("you found Brazil")
            alert("You found Brazil: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
        }

        if (gMap.getBounds().contains({lat: jsonArray[8].lattitude, lng : jsonArray[8].longitude}) && (zoomLevel == 8)) {
            console.log("you found Silwad")
            alert("You found Silwad: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
            
        }

        if (gMap.getBounds().contains({lat: jsonArray[9].lattitude, lng : jsonArray[9].longitude}) && (zoomLevel == 8)) {
            console.log("you found Cancun")
            alert("You found Cancun: + 10pts")
            //gMap.setZoom(3)
            score = score + 10;
            console.log(score)
            resetMap()
        }

        if (score == 100) {
            alert("Congrats! You have found all 10 loactions. Please refresh the page to try again.")
        }


    })

}

function aqurieZoom() {
    var zoom = gMap.getZoom()
    return zoom
}

function resetMap() {
    gMap.setZoom(9)
    var latLng = new google.maps.LatLng(71.7069, -42.6043);
    gMap.panTo(latLng);
    alert("Good Job! Zoom and and keep looking!")
    
    

}











