let myMap

function initViewMarkers() {
    initMap()
    getFestivalsJSON()
}


function initMap() {
    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 12, center: { lat: 40.392521370648154, lng: - 3.6989879718518366 }, }
    )
}


function getFestivalsJSON() {
    fetch('/api/festivals')
        .then(res => res.json())
        .then(festivalsJSON => renderFestivalsMarkers(festivalsJSON))
        .catch(err => console.log(err))
}


function renderFestivalsMarkers(festivalsJSON /* markerToMark */) {

    festivalsJSON.forEach(elm => {

        const festivalsCoords = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position: festivalsCoords,
            title: elm.title,

        })

        // if (elm.id === markerToMark) {
        //     new google.maps.Marker({
        //         map: myMap,
        //         position: festivalsCoords,
        //         title: elm.title
        //     });
        // }

    })
}