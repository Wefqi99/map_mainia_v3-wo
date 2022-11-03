var gMap


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

    hintOne.forEach(function(item){
        let o = document.createElement("option");
        o.text = item;
        o.value = item;
        HintSetOne.appendChild(o);
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
        mapPoints(data)
    } catch {
        console.log("There was an issue fetching the data")
    }
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

    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.6303, lng: 87.8539}, zoom: 3});

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
}


function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:31.9794,lng:35.2619})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}
