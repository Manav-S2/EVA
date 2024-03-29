// Community.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* <Icon name="group" type="material-icons" size={50} /> */}
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
  },
});
