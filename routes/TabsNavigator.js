import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Sidebar from '../screens/sidebar';

const Tab = createMaterialBottomTabNavigator();

function TabsNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        activeColor="#fff"
        inactiveColor="#FBEFEF"
        barStyle={{ backgroundColor: '#FF9C9C' }}
      >
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
        <Tab.Screen 
          name="LogIn" 
          component={Login} 
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="login" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{
            tabBarLabel: 'SignUp',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="new-box" color={color} size={26} />
            ),
          }}
        />        
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default TabsNavigator;