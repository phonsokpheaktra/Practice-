import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import CartStack from './CartStack';
import ProfileStack from './ProfileStack';

const Tab = createMaterialTopTabNavigator();

function TabsNavigator() {
  return (    
    <Tab.Navigator      
      tabBarPosition="bottom"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#FF9C9C'
        },
        // tabBarActiveTintColor: 'yellow',
        // tabBarInactiveTintColor: 'grey'
      }}
    >      
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchStack" 
        component={SearchStack} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="CartStack" 
        component={CartStack} 
        options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack" 
        component={ProfileStack} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;