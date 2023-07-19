import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";

function Home() {
  return (
    <View style={styles.container}>
      <Header text="Explore" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Home;
