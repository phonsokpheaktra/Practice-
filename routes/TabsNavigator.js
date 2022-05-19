import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Sidebar from '../screens/sidebar';

const Tab = createMaterialBottomTabNavigator();

function TabsNavigator() {
  return (    
    <Tab.Navigator
      shifting={true}
      activeColor="#fff"
      inactiveColor="#FBEFEF"
      barStyle={{ backgroundColor: '#FF9C9C' }}
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
        name="Sidebar" 
        component={Sidebar} 
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