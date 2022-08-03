import React, { useState } from "react"
import { View, TextInput, KeyboardType } from "react-native"

interface Props {
  value: string
  handleChange: (text: string) => void
  style: {
    backgroundColor: string
    width: string
    height: number
  }
  placeholder: string
  type?: KeyboardType | undefined
  secureTextEntry?: boolean
}

export const TextInputElement: React.FC<Props> = (props) => {
  props.secureTextEntry = false

  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.type}
        style={props.style}
        value={props.value}
        onChangeText={(text) => props.handleChange(text)}
      />
    </View>
  )
}
