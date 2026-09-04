import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';

import api from '../services/api';

export default function ProductDetailsScreen({ route }) {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        const response = await api.get(`/products/${productId}`);

        setProduct(response.data);
      } catch (error) {
        console.log(
          'Erro ao carregar produto:',
          error.message
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    carregarProduto();
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />

        <Text style={styles.message}>
          Carregando produto...
        </Text>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>
          Não foi possível carregar o produto.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <Text style={styles.price}>
          R$ {product.price.toFixed(2)}
        </Text>

        <Text style={styles.discount}>
          {product.discountPercentage.toFixed(0)}% de desconto
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
  },

  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  discount: {
    fontSize: 16,
    marginTop: 8,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  message: {
    marginTop: 10,
    fontSize: 16,
  },

  error: {
    fontSize: 16,
    textAlign: 'center',
  },
});

