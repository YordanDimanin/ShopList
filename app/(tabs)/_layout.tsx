import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function tabLayout() {
  return ( 
      <Tabs
        screenOptions={{
              tabBarActiveTintColor: '#3DA35D',
              headerStyle: {
                backgroundColor: '#25292e',
            },
              headerShadowVisible: false,
              headerTintColor: '#fff',
              tabBarStyle: {
                backgroundColor: '#25292e',
            },
          }}
      >

        <Tabs.Screen name="index" options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />

        <Tabs.Screen name="Settings" options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} /> }} />

      </Tabs>
  )
}