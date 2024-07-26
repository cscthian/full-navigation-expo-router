import { View, Text } from "react-native"
import WelcomeComponents from "../components/WelcomeComponts"

export default function index() {
  return(
    <View style={{padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <WelcomeComponents />
    </View>
  )
}