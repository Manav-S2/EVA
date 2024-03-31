import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ImageBackground } from 'react-native'; // 1
import Colors  from '../constants/Colors';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Function to handle search
  const handleSearch = () => {
    // Perform search logic here based on searchText
    // For now, let's just set some dummy recommendations
    setRecommendations([
      { id: 1, name: 'Latest EVs in the market ' },
      { id: 2, name: 'Lavish EVs' },
      { id: 3, name: 'Latest EV news' },
    ]);
  };

  return (
    <ImageBackground source={require('../assets/images/SearchBackground.jpg')} style={styles.backgroundImage}  >

      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Show me the latest EVs in the market...."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Recommendations */}
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.recommendationItem}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
    // flex: 0,
    resizeMode: 'contain',
    height: "100%",
    width: "100%",
      
  },
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
    backgroundColor: Colors.alt,
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  searchButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchButtonText: {
    color: '#fff',
  },
  recommendationItem: {
    backgroundColor: '#ccc',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Search;
