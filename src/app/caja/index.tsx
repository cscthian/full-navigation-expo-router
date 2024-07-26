import { Text, View } from "react-native"
import ButttonLink from "@/src/ui/ButtonLink"

export default function CashRegister() {
  return(
    <View>
      <Text>Aqui la caja registradora</Text>
      <ButttonLink 
        tag="Ir a Pagar"
        href="home"
      />
    </View>    
  )
}