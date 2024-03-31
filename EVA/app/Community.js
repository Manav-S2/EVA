import { View, Text, StyleSheet , Image, TouchableOpacity, LayoutAnimation} from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import moment from 'moment';

posts = [

 
  
  {
    id: "1",
    name: "Joe Mckay",
    text: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar.jpg"),
    image: require("../assets/communityImages/tempImage.jpg")
    
    },
  
  {
    id: "2",
    name: "Joe Mckay",
    text: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar.jpg"),
    image: require("../assets/communityImages/tempImage.jpg")
    
    },
  
  {
    id: "3",
    name: "Joe Mckay",
    text: 
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar.jpg"),
    image: require("../assets/communityImages/tempImage.jpg")
    
    }, 

  
  {
    id: "4",
    name: "Joe Mckay",
    text: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar.jpg"),
    image: require("../assets/communityImages/tempImage.jpg")
      
  },

    
  {
    id: "5",
    name: "Joe Mckay",
    text: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar.jpg"),
    image: require("../assets/communityImages/tempImage.jpg")
    
    },

    
  {
    id: "6",
    name: "Joe Mckay",
    text: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar.jpg"),
    image: require("../assets/communityImages/tempImage.jpg")
      
    },

]; 

export default class Community extends React.Component {
  renderPost = post => {
    return (
      <View style = {styles.feedItem}>
        <Image source = {post.avatar} style = {styles.avatar} />
        <View style = {{flex: 1}}>
          <View styles = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style = {styles.name}>{post.name}</Text>
              <Text style = {styles.timestamp}>{moment(post.timeStamp).fromNow()}</Text>

            </View>
            <Ionicons name = "ellipsis-vertical" size = {20} color = "#73788B" />
          </View>

  


          <Text styles = {styles.post}>{post.text}</Text>
          
          <Image source = {post.image} style = {styles.postImage} resizeMode = "cover" />

          <View style = {{flexDirection: "row"}}>
              <MaterialIcons name = "favorite-border" size = { 24 } color = '#73788B' style = {{marginRight: 16}} />
              <MaterialIcons name = "chat" size = { 24 } color = '#73788B' />

          </View>


        </View>
          
      </View>
    );
    
  };

  render() {
    return (
      <GestureHandlerRootView style = {styles.cons}>
      <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
      </GestureHandlerRootView>
    );
  }

}

const styles = StyleSheet.create({

  cons: {
    width: "100%",
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
avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16
},
name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65"
},
timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4
},
post: {
    marginTop: 16,
    fontSize: 14,
    color: "#838899"
},
postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16
}
});