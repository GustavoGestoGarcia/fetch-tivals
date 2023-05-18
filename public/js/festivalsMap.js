let myMap

const festivalTitle = document.querySelector('#festivalTitle').value
const festivalId = document.querySelector('#festivalID').value
const festivalLat = document.querySelector('#festivalLat').value
const festivalLon = document.querySelector('#festivalLon').value

const festivalsCoords = { lat: Number(festivalLat), lng: Number(festivalLon) }

function initViewMarkers() {

    initMap()
}

function initMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 12, center: { lat: parseFloat(festivalLat), lng: parseFloat(festivalLon) }, styles: mapStyles.aubergine }
    )
    new google.maps.Marker({
        map: myMap,
        position: festivalsCoords,
        title: festivalTitle

    })
}
