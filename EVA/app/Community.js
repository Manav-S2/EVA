// Community.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Community() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Community Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Black background color
  },
  text: {
    color: '#fff', // White text color
  },
});
