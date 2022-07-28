import React, { useState } from "react"
import { View } from "react-native"
import { TextInput } from "react-native-paper"

export const TextInputElement: React.FC = () => {
  const [inputText, setInputText] = useState("")
  console.log(inputText)
  return (
    <View>
      <TextInput
        label={"TextInput"}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      ></TextInput>
    </View>
  )
}
