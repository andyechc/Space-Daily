import { View, Text, Image, StyleSheet } from "react-native";

function Header({ text }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
      
        <Image
          style={styles.img}
          source={require("../../../assets/nasa-logo.png")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    color: "#aaa",
  },

  img: {
    width: 60,
    height: 60,
  },
});

export default Header;
