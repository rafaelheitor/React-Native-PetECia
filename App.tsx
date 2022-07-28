import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { TextInputElement } from "./src/components/TextInputElement"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <View style={{ paddingTop: 20 }}>
          <TextInputElement />
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A52A2A",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 50,
    paddingTop: 300,
  },
})
