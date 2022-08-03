import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface Props {
  title: string
  onPress: () => void
}

export const AppButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#008000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 100,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
  },
})
