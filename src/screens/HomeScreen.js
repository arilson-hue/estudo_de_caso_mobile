import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from '../services/api';

export default function HomeScreen() {
  useEffect(() => {
    const testarApi = async () => {
      try {
        const response = await api.get('/products/category/mens-shirts');

        console.log('Produtos recebidos:', response.data);
      } catch (error) {
        console.log('Erro ao acessar a API:', error.message);
      }
    };

    testarApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>
        Testando conexão com a API...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

