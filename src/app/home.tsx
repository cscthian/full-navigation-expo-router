import { View, Text } from "react-native"
import ButttonLink from "../ui/ButtonLink"

export default function HomeScreen () {
  return (
    <View>
      <Text>Aqui pantalla de creacion de tienda</Text>
      <ButttonLink 
        tag="Ir Caja"
        href="caja"
      />
    </View>
  )
}