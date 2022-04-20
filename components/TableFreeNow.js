import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-web";

const TableFreeNow = ({data}) => {
  const item = ({ item }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100, backgroundColor: "yellow" }}>
          <Text>{item.id} </Text>
        </View>
        <View style={{ width: 100, backgroundColor: "yellow" }}>
          <Text>{item.type} </Text>
        </View>
        <View style={{ width: 100, backgroundColor: "yellow" }}>
          <Text>{item.state} </Text>
        </View>
      </View>
    );
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%', }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100, backgroundColor: "red" }}>
          <Text>id </Text>
        </View>
        <View style={{ width: 100, backgroundColor: "red" }}>
          <Text>type </Text>
        </View>
        <View style={{ width: 100, backgroundColor: "red" }}>
          <Text>state</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}       
      />
     
    </View>
  );
};

export default TableFreeNow;
