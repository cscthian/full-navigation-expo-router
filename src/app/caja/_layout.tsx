import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function LayoutCaja() {
  return(
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Registrar Venta',
          tabBarIcon: ({ color }) => <FontAwesome5 name="cash-register" size={24} color={color} />,
        }}
      />
      <Tabs.Screen 
        name="cerrar-caja"
        options={{
          title: 'Cerrar Caja',
          tabBarIcon: ({ color }) => <AntDesign name="barschart" size={24} color="black" />,
        }}
      />
      <Tabs.Screen 
        name="(productos)"
        options={{
          title: 'Productos',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="storefront-sharp" size={24} color="black" />,
        }}
      />
      <Tabs.Screen 
        name="prestamos"
        options={{
          title: 'Prestamos fiado',
          tabBarIcon: ({ color }) => <FontAwesome5 name="piggy-bank" size={24} color="black" />,
        }}
      />
      <Tabs.Screen 
        name="(configuracion)"
        options={{
          title: 'Configuracion sobre Caja',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="settings-suggest" size={24} color="black" />,
        }}
      />

    </Tabs>
  )
}