import React from "react";
import { StyleSheet, Image, Platform } from "react-native";
import MapView, { MarkerAnimated } from "react-native-maps";

const ShareNowCars = ({ id, location, name }) => {
  return Platform.OS === "web" ? (
    <MapView.Marker
      key={id}
      coordinate={location}
      image={require("../assets/car.png")}
      title={name}
    />
  ) : (
    <MarkerAnimated
      key={id}
      coordinate={location}
      anchor={{ x: 0.35, y: 0.32 }}
    >
      <Image tyle={styles.car} source={require("../assets/car.png")} />
    </MarkerAnimated>
  );
};

export default ShareNowCars;

const styles = StyleSheet.create({
  car: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
