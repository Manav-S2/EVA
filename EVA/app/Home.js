import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import moment from 'moment';

const EVs = [
  {
    id: "1",
    name: "Fiat 500 / Abarth 500e",
    image: require("../assets/homeImages/1.png")
  },
  {
    id: "2",
    name: "Lotus Eletre",
    image: require("../assets/homeImages/2.png")
  },
  {
    id: "3",
    name: "Hyundai Kona Electric",
    image: require("../assets/homeImages/3.png")
  },
  {
    id: "4",
    name: "Renault Scenic E-Tech",
    image: require("../assets/homeImages/4.png")
  },
  {
    id: "5",
    name: "Hyundai Ioniq 6",
    image: require("../assets/homeImages/5.png")
  },
  {
    id: "6",
    name: "Maserati GranTurismo Folgore",
    image: require("../assets/homeImages/6.png")
  },
  {
    id: "7",
    name: "Kia EV9",
    image: require("../assets/homeImages/7.png")
  },
  {
    id: "8",
    name: "Volvo EX30",
    image: require("../assets/homeImages/8.png")
  },
  {
    id: "9",
    name: "BMW i4",
    image: require("../assets/homeImages/9.png")
  },
  {
    id: "10",
    name: "Volkswagen ID.7",
    image: require("../assets/homeImages/10.png")
  },
  {
    id: "11",
    name: "Jeep Avenger",
    image: require("../assets/homeImages/11.png")
  },
];

export default function Home({ navigation }) {

  const renderEVs = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', { EV: item })}
        style={styles.feedItem}
      >
        <View style={{flex: 1}}>
          <Image source={item.image} style={styles.EVsImage} resizeMode="cover" />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView style={styles.cons}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Latest EVs</Text>
        </View>

        <FlatList
          style={styles.feed}
          data={EVs}
          renderItem={renderEVs}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  cons: {
    width: "100%",
    paddingBottom: 75,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#EFECF4"
  },
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500"
  },
  feed: {
    marginHorizontal: 16
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8
  },
  name: {
    fontSize: 17,
    fontWeight: "500",
    color: "#454D65"
  },
  EVs: {
    marginTop: 16,
    fontSize: 14,
    color: "#838899"
  },
  EVsImage: {
    width: undefined,
    height: 200,
    borderRadius: 5,
    marginVertical: 16
  }
});
