import React from "react"
import { Pressable, StyleSheet } from "react-native"

export default function ButtonNav({icon, onPress}:{icon: React.ReactElement, onPress: () => void}) {
  return (
    <Pressable
      style={styles.btn} 
      onPress={onPress}>
        {icon}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
  }
})