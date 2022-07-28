import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInputElement } from "./src/components/TextInputElement"

export default function App() {
  const [inputText, setInputText] = useState("")
  console.log(inputText)

  function handleChange(text: string) {
    setInputText(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Meu primeiro aplicativo</Text>
        <View style={styles.input}>
          <TextInputElement text={inputText} handleChange={handleChange} />
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
  inputContainer: {
    padding: 50,
    paddingTop: 300,
  },
  input: {
    paddingTop: 20,
  },

  text: {
    fontSize: 20,
    color: "#fff",
  },
})
