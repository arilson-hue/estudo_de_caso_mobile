import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import ProductsTabs from './ProductsTabs';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import { logout } from '../store/authSlice';

const Stack = createNativeStackNavigator();

function ProductsHeader() {
const dispatch = useDispatch();

const handleLogout = () => {
dispatch(logout());
};

return (
<TouchableOpacity onPress={handleLogout}>
<Text style={{ fontSize: 16, marginRight: 15 }}>
Sair
</Text>
</TouchableOpacity>
);
}

export default function AppNavigator() {
const isAuthenticated = useSelector(
(state) => state.auth.isAuthenticated
);

return (
<Stack.Navigator>
{!isAuthenticated ? (
<Stack.Screen
name="Login"
component={LoginScreen}
options={{ headerShown: false }}
/>
) : (
<>
<Stack.Screen
name="Products"
component={ProductsTabs}
options={{
title: 'Catálogo',
headerRight: () => <ProductsHeader />,
}}
/>

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          title: 'Detalhes do Produto',
        }}
      />
    </>
  )}
</Stack.Navigator>

);
}