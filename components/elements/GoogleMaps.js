import style from "components/elements/GoogleMaps.module.css";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const id = ["8ed003cb400a2f49"];

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div className={style.container}>
        <h2 className={style.header}>Standort</h2>
        <p className={style.sub_header}>Hier finden Sie uns</p>
      </div>
      <Map />
    </>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: 53.6211551, lng: 10.1561786 }), []);

  return (
    <GoogleMap
      zoom={13}
      options={{ mapId: "8ed003cb400a2f49" }}
      center={center}
      mapContainerClassName="map-container"
    >
      <MarkerF key={1} position={center} />
    </GoogleMap>
  );
}

export default GoogleMaps;
