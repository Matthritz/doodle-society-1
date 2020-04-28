import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, Data } from '@react-google-maps/api'

const Map = ({ doods }) => {
  const [ selectedDoodle, setSelectedDoodle ] = useState(null);
  const fakeDoods = [
    {
      id: 0,
      username: "Tom",
      url: "data:image/png;base64,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",
      original_url: "https://res.cloudinary.com/jameseaster/image/upload/v1588025558/doodle/a3lubfrynwlctyuorfsp.jpg",
      position: {
        lat: 29.961065,
        lng: -90.101533
      }
    },
    {
      id: 1,
      username: "Kerry",
      url: "data:image/png;base64,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",
      original_url: "https://res.cloudinary.com/jameseaster/image/upload/v1588025558/doodle/a3lubfrynwlctyuorfsp.jpg",
      position: {
        lat: 29.971065,
        lng: -90.131533
      }
    },
    {
      id: 2,
      username: "Joe",
      url: "data:image/png;base64,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",
      original_url: "https://res.cloudinary.com/jameseaster/image/upload/v1588025558/doodle/a3lubfrynwlctyuorfsp.jpg",
      position: {
        lat: 29.951065,
        lng: -90.131533
      }
    },
  ];

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
    >
      <GoogleMap
        id='example-map'
        mapContainerStyle={{
          height: "90vh",
          width: "90vw",
          margin: "auto",
        }}

        // view what doods data is available
        onLoad={() => { console.log(doods) }}

        zoom={12}
        center={{
          lat: 29.971065,
          lng: -90.101533
        }}
      >
        <h1>Doodle Map</h1>
        {fakeDoods.map((dood) => (
          <Marker
            key={dood.id}
            position={dood.position}
            onClick={() => {
              setSelectedDoodle(dood)
            }}
          />
        ))}
        {selectedDoodle && (
          <InfoWindow
            position={selectedDoodle.position}
            onCloseClick={() => {
              setSelectedDoodle(null)
            }}
          >
            <div>
              <h6>{selectedDoodle.username}</h6>
                <img style={{height: "15vh", width: "auto"}} className="doodle" src={selectedDoodle.url} alt="" />
                <img style={{height: "15vh", width: "auto"}} className="bg-img" src={selectedDoodle.original_url} alt="" />
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
