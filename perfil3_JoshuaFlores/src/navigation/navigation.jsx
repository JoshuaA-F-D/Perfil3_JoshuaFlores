import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from '../screens/Inicio';
import VistaApi from '../screens/vistaApi';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarIcon: () => null, // Oculta el icono/cuadrado predeterminado
          tabBarLabelPosition: 'below-icon', // Mantiene el texto en el centro
          tabBarStyle: {
            backgroundColor: '#202329',
            borderTopColor: '#3c3e44',
            height: 100, // Ajusta la altura si lo deseas
          },
          tabBarActiveTintColor: '#00ff97',
          tabBarInactiveTintColor: '#9e9e9e',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 15, // Centra el texto verticalmente 
          },
        }}
      >
        <Tab.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            tabBarLabel: 'Perfil',
          }}
        />
        <Tab.Screen 
          name="VistaApi" 
          component={VistaApi} 
          options={{
            tabBarLabel: 'Personajes',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}