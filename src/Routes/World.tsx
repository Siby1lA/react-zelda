import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";
import Nav from "../components/Nav";
import MapIconsContainer from "../Maps/map-icons-container";
import { createStore } from "redux";
import { ControlPanel, reducer } from "../Maps/control-panel";
import locationData from "../data/locations";
import { Provider } from "react-redux";
const initialState = {
  activeIconTypes: [],
  locations: locationData,
};

let store = createStore(reducer, initialState);
const Wrap = styled.div``;
function World() {
  const maxBounds: any = [
    [0, -176.59],
    [85.455, 38],
  ];

  const position: any = [70.505, -75.09];
  // For debugging points add this to <Map>
  // `onClick={(event) => console.log(event.latlng)}`
  return (
    <Wrap>
      <Provider store={store}>
        <Nav />
        <MapContainer
          style={{ width: "100%", height: "91vh" }}
          maxBounds={maxBounds}
          center={position}
          zoom={4}
          scrollWheelZoom={false}
        >
          <TileLayer
            minZoom={3}
            maxZoom={6}
            url="/images/tiles/{z}/{x}/{y}.png"
          />
          <MapIconsContainer />
          <ControlPanel store={store} />
        </MapContainer>
      </Provider>
    </Wrap>
  );
}
export default World;
