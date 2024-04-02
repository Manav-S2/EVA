import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import Home from './Home.js';
import Community from './Community';
import Settings from './Settings';
import Profile from './Profile.js';
import Search from './Search.js';
import {SimpleLineIcons, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Index({ navigation }) {
  const [currentPage, setCurrentPage] = useState('Home');
  const [homeButtonScale] = useState(new Animated.Value(1));
  const [settingsButtonScale] = useState(new Animated.Value(1));
  const [profileButtonScale] = useState(new Animated.Value(1));
  const [searchButtonScale] = useState(new Animated.Value(1));
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

  const handleProfilePress =  () => {
    setCurrentPage('Profile');
    animateButton(profileButtonScale);
  }; 

  
  const handleSearchPress =  () => {
    setCurrentPage('Search');
    animateButton(searchButtonScale);
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
      case 'Profile':
        return <Profile />;
      case 'Search':
        return <Search />;
      default:
        return <Home />;
    }
  };

  return (

    <View style={styles.container}>
   
      {renderPage()}

      <View style={styles.bottomBar}>

        <TouchableOpacity style={styles.button} onPress={handleHomePress}>
          <Animated.View style={{ transform: [{ scale: homeButtonScale }] }}>
            <SimpleLineIcons name="home" size={24} color="#FFA000" />
          </Animated.View>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSearchPress}>
          <Animated.View style={{ transform: [{ scale: searchButtonScale }] }}>
            <MaterialIcons name = "search" size = {24} color = "#FFA000" />
          </Animated.View>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.communityButton} onPress={() => navigateTo('Community')}>
          <Icon name="people" type="material-icons" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSettingsPress}>
          <Animated.View style={{ transform: [{ scale: settingsButtonScale }] }}>
            <MaterialIcons name = "settings" size = {24} color = "#FFA000" />
          </Animated.View>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.button} onPress={handleProfilePress}>
          <Animated.View style={{ transform: [{ scale: profileButtonScale }] }}>
            <MaterialIcons name = "person-outline" size = {24} color = "#FFA000" />
          </Animated.View>
          <Text style={styles.buttonText}>Profile</Text>
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
    backgroundColor: '#fff', // Black background color
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Dark grey background color
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
