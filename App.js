import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import FreeNowCars from "./components/FreeNowCars";
import axios from "axios";
import ShareNowCars from "./components/ShareNowCars";

export default function App() {
  const [cars, setCars] = useState([]);
  const [sncars, setSncars] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getCars = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:5000/free-now/vehicles"
        );
        setCars(data.poiList);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, no data");
      }
    };    
    getCars();    
  }, []);

  useEffect(() => {
  const getSnCars = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:5000/share-now/vehicles"
      );
      setSncars(data.placemarks);   
      setLoading(false);
    } catch (error) {
      return alert("Sorry, no data");
    }
  };
  getSnCars();
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
        {cars.map((object) => (
          <FreeNowCars
           key={object.id}
            location={{
              latitude: object.coordinate.latitude,
              longitude: object.coordinate.longitude,
            }}
          />
        ))}
        {sncars.map((object) => (
          <ShareNowCars 
           key={object.id}
          location={{
              latitude: object.coordinates[1],
              longitude: object.coordinates[0],
            }}
           />
        ))}
       
      </MapView> )}
      <Text>FreeNowCars & ShareNowCars</Text> 
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
