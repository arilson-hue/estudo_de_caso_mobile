import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProductsScreen from '../screens/ProductsScreen';

const Tab = createMaterialTopTabNavigator();

export default function ProductsTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Masculino"
        children={() => <ProductsScreen gender="male" />}
      />

      <Tab.Screen
        name="Feminino"
        children={() => <ProductsScreen gender="female" />}
      />
    </Tab.Navigator>
  );
}

