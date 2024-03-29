import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Settings() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  const containerStyle = mode === 'dark' ? styles.darkContainer : styles.lightContainer;
  const textStyle = mode === 'dark' ? styles.darkText : styles.lightText;

 
    // <View style={[styles.container, containerStyle]}>
    //   {/* <Text style={textStyle}>Settings Page</Text> */}
    //   <TouchableOpacity style={styles.modeButton} onPress={toggleMode}>
    //     <Text style={styles.modeButtonText}>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</Text>
    //   </TouchableOpacity>
    // </View>

  const Settings = ({ navigation }) => {
    return (
      <SafeAreaView  style = {{flex: 1, backgroundColor: "#fff" }}>
        <View style =  {{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}>
          <TouchableOpacity
            onPress= {() => navigation.goBack()}
            style = {{
              position: "absolute",
              left: 0
            }} >
                <MaterialIcons 
                  name = "keyboard-arrow-left"
                  size = {24}
                  color = '#fff'/>
                  <Text> style = {{}} Settings</Text>
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>

    )
  }

  
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // darkContainer: {
  //   flex: 1,
  //   backgroundColor: '#000', // Black background color for dark mode
  // },
  // lightContainer: {
  //   width: '100%',
  //   height: '100%',
  //   flex: 1,
  //   backgroundColor: '#FFF', // White background color for light mode
  // },
  // darkText: {
  //   color: '#FFF', // White text color for dark mode
  // },
  // lightText: {
  //   color: '#000', // Black text color for light mode
  // },
  // modeButton: {
  //   marginTop: 20,
  //   padding: 10,
  //   backgroundColor: '#FFA000', // Yellow button color
  //   borderRadius: 5,
  // },
  // modeButtonText: {
  //   color: '#FFF', // White text color for button
  // },
});
