import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="museu"
        options={{
          title: 'Museu',
          tabBarIcon: ({ color }) => <MaterialIcons name="museum" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
