import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Icon } from 'react-native-elements';
import { SimpleLineIcons, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Community from './Community';
import Settings from './Settings';
import { ThemeProvider } from '../assets/files/ThemeProvider';


export default function Index({ navigation }) {
  const [currentPage, setCurrentPage] = useState('Home');
  const [homeButtonScale] = useState(new Animated.Value(1));
  const [settingsButtonScale] = useState(new Animated.Value(1));

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleHomePress = () => {
    setCurrentPage('Home');
    animateButton(homeButtonScale);
  };

  const handleSettingsPress = () => {
    setCurrentPage('Settings');
    animateButton(settingsButtonScale);
  };

  const animateButton = (buttonScale) => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Community':
        return <Community />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <View style={styles.container}>
            <Text>Welcome to the Home Page</Text>
          </View>
        );
    }
  };

  return (
    
    <View style={styles.container}>
      {renderPage()}
     
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleHomePress}>
          <Animated.View style={{ transform: [{ scale: homeButtonScale }] }}>
            <Icon name="home" type="material-community" size={30} color="#FFA000" />
          </Animated.View>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.communityButton} onPress={() => navigateTo('Community')}>
          <Icon name="people" type="material-icons" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSettingsPress}>
          <Animated.View style={{ transform: [{ scale: settingsButtonScale }] }}>
            <Icon name="settings" type="material-icons" size={30} color="#FFA000" />
          </Animated.View>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#212121', // Dark grey background color
    paddingVertical: 7,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    alignItems: 'center',
  },
  communityButton: {
    backgroundColor: '#4CAF50', // Green button color
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Add elevation for shadow on Android
  },
  buttonText: {
    fontSize: 12,
    color: '#fff', // White text color
  },
});
