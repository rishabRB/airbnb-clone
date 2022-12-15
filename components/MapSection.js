import React,{useState} from 'react'
import Map,{Marker} from 'react-map-gl';
import  getCenter  from 'geolib/es/getCenter';


const MapSection = ({searchResult}) => {

  const coordinates = searchResult.map(search => ({
    longitude:search.long,
    latitude:search.lat
  }))


  const center = getCenter(coordinates)


  const [viewport,setVeiwport] = useState({
    longitude:center.longitude,
    latitude:center.latitude,
    zoom:11
  })

  return (
  <Map
  style={{width:"100%", height:"100%"}}
  mapStyle="mapbox://styles/rishabrb/clbgj7766000s14ppki0n5mc1"
  mapboxAccessToken={process.env.mapbox_key}
  initialViewState={viewport} 
  >
     {searchResult.map(result => (
      <div key={result.long}>
        <Marker
         longitude={result.long}
         latitude={result.lat}
         offsetRight={-20}
         offsetTop={-10}
        >
          <p className='text-2xl animate-bounce cursor-pointer'>📌</p>
        </Marker>
      </div>
    ))}
  </Map>
)
}

export default MapSection

