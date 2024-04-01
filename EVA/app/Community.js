import { View, Text, StyleSheet , Image, TouchableOpacity, LayoutAnimation} from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import moment from 'moment';

posts = [

 
  
  {
    id: "1",
    name: "Ever flèche",
    text: 
    "🚗🔌 Exciting news! Introducing the Electra E1, our latest electric marvel. Sleek design, zero emissions, and cutting-edge tech. Get ready to redefine your drive. Pre-orders open now! 🌟 #ElectraE1 #ElectricRevolutionFeel free to customize it further to match your companys brand voice! 😊",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar1.png"),
    image: require("../assets/communityImages/tempImage1.jpg")
    
    },
  
  {
    id: "2",
    name: "Dr. Ava Reynolds",
    text: 
    '🚀🔬 Electra Flux Capacitor: Dr. Ava Reynolds, our brilliant EV specialist, has cracked the code! Our new invention harnesses quantum energy to boost electric vehicle efficiency by 30%. Say goodbye to range anxiety! 🌟 #ElectraInnovation #EVRevolutionFeel free to share this exciting news with the world! 🙌',
    timestamp: "346109233726",
    avatar: require("../assets/communityImages/tempAvatar2.jpg"),
    image: require("../assets/communityImages/tempImage2.jpg")
    
    },
  
  {
    id: "3",
    name: "Maxwell Chang",
    text: 
    "📊🚗 EV Market Insights: Sales of electric cars have soared past 10 million in 2022! A whopping 14% of all new cars sold are now electric, up from 9% in 2021 and less than 5% in 2020. China remains the global frontrunner, accounting for around 60% of electric car sales. The future is electric! ⚡🌎 #EVRevolutionFeel free to share this electrifying news with your followers! 🙌",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar3.png"),
    image: require("../assets/communityImages/tempImage3.jpg")
    
    }, 

  
  {
    id: "4",
    name: "EvolveTech Research Team",
    text: 
      "🔬🚗 Breaking News: Our research team has delved deep into the electric vehicle (EV) landscape! 🌟 We’ve applied for 48,000 patents globally, with over 30,000 already granted. Our 90,000-strong R&D team is expanding, fueling innovation in vehicle, battery, and manufacturing technologies. 🛠️🔋 Stay tuned for electrifying breakthroughs! ⚡ #EVInnovation #ResearchMilestones Feel free to share these exciting updates with your audience! 😊",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar4.jpg"),
    image: require("../assets/communityImages/tempImage4.jpg")
      
  },

    
  {
    id: "5",
    name: "OptiEvo Solutions",
    text: 
      "🚗🔌 Exciting News! Optivo Solutions proudly unveils the Electra Nova, our latest electric masterpiece. With cutting-edge technology, sleek design, and zero emissions, it’s a game-changer for sustainable mobility. Pre-orders now open! 🌟 #ElectraNova #EVRevolution  ",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar5.png"),
    image: require("../assets/communityImages/tempImage5.png")
    
    },

    
  {
    id: "6",
    name: "Adaptive Evolution Labs",
    text: 
      "The future is electric! ⚡️ Introducing our revolutionary new EV from Adaptive Evolution Labs. #AdaptiveEV #FutureofMobility",
    timestamp: "156109273726",
    avatar: require("../assets/communityImages/tempAvatar6.png"),
    image: require("../assets/communityImages/tempImage6.png")
      
    },

]; 

export default class Community extends React.Component {
  renderPost = post => {
    return (
      <View style = {styles.feedItem}>
        <Image source = {post.avatar} style = {styles.avatar} />
        <View style = {{flex: 1}}>
          <View style = {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"  }}>
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