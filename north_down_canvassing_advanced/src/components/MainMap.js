import React,{useState}from'react';
import {MapContainer,TileLayer,Polygon,Marker,Popup,Polyline}from'react-leaflet';
import {wardBoundaries}from'../data/wardBoundaries';
import {demoHouseholds}from'../data/demoHouseholds';
import {generateRoute}from'../utils/routing';
export default function MainMap(){const[selectedWard,setSelectedWard]=useState(null);const route=selectedWard?generateRoute(demoHouseholds):[];return(<MapContainer center={[54.66,-5.67]} zoom={13} style={{height:'100vh'}}><TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/> {wardBoundaries.map(w=>(<Polygon key={w.id} positions={w.polygon} pathOptions={{color:w.color,weight:selectedWard===w.id?4:2,fillOpacity:0.2}} onClick={()=>setSelectedWard(w.id)}><Popup>{w.name}</Popup></Polygon>))}{demoHouseholds.map(h=>(<Marker key={h.id} position={[h.lat,h.lon]}><Popup>{h.address}</Popup></Marker>))}{route.length>1&&(<Polyline positions={route} pathOptions={{color:'#ff6600',weight:4}}/> )}</MapContainer>);}