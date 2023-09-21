import React, { useContext, useEffect, useState } from "react";
import router from "../styles/router.module.css";
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import { Context } from "./context_component/context.jsx"

export default function (props) {
  const { Latitude, Longitude } = useContext(Context)

  const styled = {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    "zIndex": "3",
    "marginBottom": "20%"
  }

  return (
    <div className={router.box}>
      <MapContainer center={{ 
        lat: Latitude, 
        lng: Longitude
        }} zoom={13} scrollWheelZoom={false} style={styled}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{ lat: Latitude, lng: Longitude }} >
        </Marker>
      </MapContainer>

    </div>

  )
}