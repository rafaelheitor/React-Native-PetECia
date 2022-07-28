import React, { useState } from "react"
import { View } from "react-native"
import { TextInput } from "react-native-paper"

interface Props {
  text: string
  handleChange: (value: string) => void
}

export const TextInputElement: React.FC<Props> = (props) => {
  return (
    <View>
      <TextInput
        label={"TextInput"}
        value={props.text}
        onChangeText={(text) => props.handleChange(text)}
      ></TextInput>
    </View>
  )
}
