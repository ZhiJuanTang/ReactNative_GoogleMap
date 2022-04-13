import React, { useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import FreeNowCars from "./components/FreeNowCars";

const fakeDriverLocations = [
  {
    'id': 1,
    "coordinate": {
      "latitude": 53.5514746,
      "longitude": 10.0031117
  },
},
  {
    'id': 2,
    "coordinate": {
      "latitude": 53.55342888743947,
      "longitude": 10.007842183122419
  },
  },
  {
    'id': 3,
    "coordinate": {
      "latitude": 53.58222524795621,
      "longitude": 10.066394607153665
  },
  },
];

console.log(fakeDriverLocations);

export default function App() {
  const [cars, setCars] = useState(fakeDriverLocations);
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 53.5532316,
          longitude: 10.0087783,
          longitudeDelta: 0.045,
          latitudeDelta: 0.045,
        }}
        style={styles.mapView}
      >
        {cars.map((object) => (
          <FreeNowCars
            key={object.id}
            uid={object.id}
            location={{
              latitude: object.coordinate.latitude,
              longitude: object.coordinate.longitude,
            }}
          />
        ))}
      </MapView>
      <Text>FreeNowCars </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
});
