// app terceros
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Stack, Link, router } from 'expo-router'
// native

// local components
import ButtonNav from '../ui/ButtonNav';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name='index'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='home'
        options={{
          title: '',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft(props) {
            return(
              <ButtonNav 
                icon={ <Entypo name="home" size={24} color="black" /> }
                onPress={() => router.replace('home')}
              />
            )
          },
          headerRight(props) {
            return(
              <Link href='settings'>
                <Feather name="settings" size={24} color="black" />
              </Link>
              
            )
          },
        }}
      />
      <Stack.Screen 
        name='settings'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name='caja'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
