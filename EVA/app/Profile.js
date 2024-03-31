import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Top from "../Components/Top";
import Middle from "../Components/Middle";
import Bottom from "../Components/Bottom";
import Sizes from "../constants/Sizes";

export default function Profile() {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/profileImages/bg.png")}
        // blurRadius={1}
      >
        <View style={styles.container}>
          <Top />
          <Middle />
          <Bottom/>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: Sizes.medium,
    marginTop: Sizes.safe,
  },
});