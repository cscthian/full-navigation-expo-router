import { View, Text, StyleSheet } from 'react-native'
import { Link } from "expo-router"

export default function ButttonLink({ tag, href }: {tag:string, href: string}) {
  return(
    <Link style={styles.btn} href={href}>
      <Text style={styles.tag}>{ tag }</Text>
    </Link>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#9b59b6',
    paddingHorizontal: 20,
    paddingVertical: 8,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  tag: {
    color: '#ecf0f1',
    textAlign: 'center'
  }
})