
	mapboxgl.accessToken = 'pk.eyJ1IjoibWl5YTAwMDEiLCJhIjoiY2oxNnBoenNxMDNhZjJxbzd6ajJhOTc3OCJ9.qJRkftceKZvKtUeaOPo-kQ';
    const map = new mapboxgl.Map({
        container: 'map',
        zoom: 10.5,
        center: [-220.9184, 35.3999],
        pitch: 85,
        bearing: 80,
        style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
        hash: true,
    });

    map.on('load', () => {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14,
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
              'sky-atmosphere-color': '#000000',
              'sky-atmosphere-halo-color': '#000000',

            }
        });
    });
