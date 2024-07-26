import { AntDesign } from '@expo/vector-icons';
import { Tabs } from "expo-router"

export default function LayoutProductos() {
  return (
    <Tabs
      screenOptions={{
      }}
    >
      <Tabs.Screen 
        name="productos"
        options={{
          title: 'Productos',
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color="black" />
        }}
      />
      <Tabs.Screen 
        name="nuevo-productos"
        options={{
          title: 'Registrar Nuevo',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircle" size={24} color="black" />
        }}
      />
    </Tabs>
  )
}