import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function LayoutConfiguracion() {
  return (
    <GestureHandlerRootView 
      style={{ flex: 1 }}>
        <Drawer 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#27ae60'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerStyle: {
              backgroundColor: '#16a085',
            },
            drawerItemStyle: {
              backgroundColor: '#9b59b6',
            },
            drawerLabelStyle: {
              color: 'white'
            }
          }}
        />
    </GestureHandlerRootView>
  )
}