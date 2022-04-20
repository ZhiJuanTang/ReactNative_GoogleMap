import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import FreeNowCars from "./components/FreeNowCars";
import ShareNowCars from "./components/ShareNowCars";

export default function App() {
  const [freenowcars, setFreenowcars] = useState([]);
  const [sharenowcars, setSharenowcars] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getFreeNowCars = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:5000/free-now/vehicles"
        );
        setFreenowcars(data.poiList);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, no data");
      }
    };    
    getFreeNowCars();    
  }, []);

  useEffect(() => {
  const getShareNowCars = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:5000/share-now/vehicles"
      );
      setSharenowcars(data.placemarks);   
      setLoading(false);
    } catch (error) {
      return alert("Sorry, no data");
    }
  };
  getShareNowCars();
}, []);

  return (
    <View style={styles.container}>  
   {loading?(
<Text>Loading...</Text>
) : (
      <MapView
        initialRegion={{
          latitude: 53.5532316,
          longitude: 10.0087783,
          longitudeDelta: 0.045,
          latitudeDelta: 0.045,
        }}
        style={styles.mapView}
      >
        {freenowcars.map((object) => (
          <FreeNowCars
           key={object.id}
            location={{
              latitude: object.coordinate.latitude,
              longitude: object.coordinate.longitude,
            }}
          />
        ))}
        {sharenowcars.map((object) => (
          <ShareNowCars 
           key={object.id}
          location={{
              latitude: object.coordinates[1],
              longitude: object.coordinates[0],
            }}
           />
        ))}       
      </MapView> )}
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
