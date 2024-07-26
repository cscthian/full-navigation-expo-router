import { Stack } from "expo-router";

export default function LayoutSettings() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#34495e',
        },
        headerTintColor : '#e67e22'
      }}
    >
      <Stack.Screen 
        name= 'index'
        options={{
          headerTitle: 'Configuraciones'
        }}
      />
      <Stack.Screen 
        name= 'export-data'
        options={{
          headerTitle: 'Exportar Datos'
        }}
      />
      <Stack.Screen 
        name= 'settings-tienda'
        options={{
          headerTitle: 'Configurar Tienda'
        }}
      />
      <Stack.Screen 
        name= 'about-devs'
        options={{
          headerTitle: 'Sobre los desarrolladores'
        }}
      />
    </Stack>
  )
}