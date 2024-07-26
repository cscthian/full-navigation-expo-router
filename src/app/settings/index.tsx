import { Text, View } from "react-native"
import ButttonLink from "../../ui/ButtonLink"

export default function settings() {
  return (
    <View>
      <Text>Configurar pantallas</Text>
      <ButttonLink tag="Exportar Datos" href="/settings/export-data" />
      <ButttonLink tag="Configuar Tienda" href="/settings/settings-tienda" />
      <ButttonLink tag="sobre los desarrolladores" href="/settings/about-devs" />
    </View>
  )
}