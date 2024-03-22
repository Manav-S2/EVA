// Community.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Community() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Community Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color for Community page
  },
});
