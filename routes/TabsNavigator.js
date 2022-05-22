import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Sidebar from '../screens/sidebar';
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
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack" 
        component={ProfileStack} 
        options={{
          tabBarLabel: 'Sidebar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;