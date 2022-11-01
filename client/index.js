var gMap

function initApp() {
    console.log("Map Mainia Starting...")
    start()
}

async function start()  {
    try {
        const response = await fetch('/send')
        const data = await response.json()
        mapPoints(data)
    } catch {
        console.log("There was an issue fetching the data")
    }

    try {
        const responseTwo = await fetch('/hintsOne')
        const info = await responseTwo.json()
        createHintOneList(info)
    } catch {
        console.log("There was an issue trying to get hint set one.")
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

function createHintOneList(info) {
    var lstOne = [];
    var obj = JSON.parse(info);

    for (var i in obj) {
        lstOne.push(obj[i]);
    }

    console.log(lstOne)

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
