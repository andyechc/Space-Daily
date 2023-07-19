import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View>
      <Text>Explore</Text>
      <Image source={require("../../assets/icon.png")} />
    </View>
  );
}
