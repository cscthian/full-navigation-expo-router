import { router } from "expo-router"
import { Text, View, Image, Pressable, StyleSheet } from "react-native"

export default function WelcomeComponents() {
  return (
    <View>
      <Image source={require('@/assets/images/02.png')} style={{width:200, height:200}}/>
      <Pressable 
        style={styles.btn}
        onPress={() => router.replace('/home')}>
          <Text style={{ color: 'white' }}>Comenzar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#8e44ad',
    paddingHorizontal: 10,
    paddingVertical:20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  }
})