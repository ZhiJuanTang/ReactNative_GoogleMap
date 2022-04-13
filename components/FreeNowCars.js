import React from 'react'
import { StyleSheet,Image } from "react-native";
import { MarkerAnimated } from 'react-native-maps';

const FreeNowCars = ({id, location}) => {
  return (
    <MarkerAnimated key = {id}
    coordinate = {location}
    anchor={{ x: 0.35, y: 0.32}}>
        <Image tyle={styles.car} source={require('../assets/favicon.png')} />
    </MarkerAnimated>
  )
}

export default FreeNowCars

const styles = StyleSheet.create({
    car: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },    
  });
  