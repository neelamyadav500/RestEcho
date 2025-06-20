mapboxgl.accessToken = mapToken; 
  console.log(mapToken);
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 12 // starting zoom
});

const marker1 = new mapboxgl.Marker({color:'red'})
.setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
.setPopup(new mapboxgl.Popup()
.setHTML(`<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`)
.setMaxWidth("300px"))
.addTo(map);
