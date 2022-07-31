import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

interface Props {
  value: string
  handleChange: (text: string) => void
  style: {
    backgroundColor: string
    width: string
    height: number
  }
  placeholder: string
}

export const TextInputElement: React.FC<Props> = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        style={props.style}
        value={props.value}
        onChangeText={(text) => props.handleChange(text)}
      ></TextInput>
    </View>
  )
}
