import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import FreeNowCars from "./components/FreeNowCars";
import axios from "axios";


export default function App() {
  const [cars, setCars] = useState([]);
  // const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getCars = async () => {
      try {
        // setLoading(true);
 const {data} = await axios.get(
   "http://localhost:5000/free-now/vehicles"
 );
setCars(data.poiList);
console.log(cars);
console.log(1);

// setLoading(false);
      }catch(error){
        return alert("Sorry, no data")
      }
    };
    getCars();   
  },[]);
  
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
      <Text>FreeNowCars</Text>
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