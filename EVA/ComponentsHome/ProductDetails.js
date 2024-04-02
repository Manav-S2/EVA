import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { EV } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{EV.name}</Text>
      <Text>dfdgddzxz</Text>
      <Image source={EV.image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;