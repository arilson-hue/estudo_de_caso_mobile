import React, { useEffect, useState } from 'react';
import {
View,
Text,
FlatList,
Image,
ActivityIndicator,
StyleSheet,
TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../services/api';

export default function ProductsScreen({ gender }) {
const navigation = useNavigation();

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

useEffect(() => {
const carregarProdutos = async () => {
try {
setLoading(true);
setError(false);

    const categories =
      gender === 'male'
        ? [
            'mens-shirts',
            'mens-shoes',
            'mens-watches',
          ]
        : [
            'womens-bags',
            'womens-dresses',
            'womens-jewellery',
            'womens-shoes',
            'womens-watches',
          ];

    const responses = await Promise.all(
      categories.map((category) =>
        api.get(`/products/category/${category}`)
      )
    );

    const allProducts = responses.flatMap(
      (response) => response.data.products
    );

    setProducts(allProducts);
  } catch (error) {
    console.log(
      'Erro ao carregar produtos:',
      error.message
    );

    setError(true);
  } finally {
    setLoading(false);
  }
};

carregarProdutos();

}, [gender]);

const renderProduct = ({ item }) => (
<TouchableOpacity
style={styles.card}
activeOpacity={0.85}
onPress={() =>
navigation.navigate('ProductDetails', {
productId: item.id,
})
}
>
<View style={styles.imageContainer}>
<Image
source={{ uri: item.thumbnail }}
style={styles.image}
/>

    <View style={styles.discountBadge}>
      <Text style={styles.discountText}>
        -{item.discountPercentage.toFixed(0)}%
      </Text>
    </View>
  </View>

  <Text
    style={styles.name}
    numberOfLines={2}
  >
    {item.title}
  </Text>

  <Text style={styles.oldPrice}>
    R$ {(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}
  </Text>

  <Text style={styles.price}>
    R$ {item.price.toFixed(2)}
  </Text>
</TouchableOpacity>

);

if (loading) {
return (
<View style={styles.center}>
<ActivityIndicator size="large" />

    <Text style={styles.message}>
      Carregando produtos...
    </Text>
  </View>
);

}

if (error) {
return (
<View style={styles.center}>
<Text style={styles.error}>
Não foi possível carregar os produtos.
</Text>
</View>
);
}

return (
<View style={styles.container}>
<FlatList
data={products}
renderItem={renderProduct}
keyExtractor={(item) => item.id.toString()}
numColumns={2}
columnWrapperStyle={styles.row}
contentContainerStyle={styles.list}
showsVerticalScrollIndicator={false}
/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},

list: {
padding: 10,
paddingBottom: 25,
},

row: {
justifyContent: 'space-between',
marginBottom: 10,
},

card: {
width: '48.5%',
backgroundColor: '#fff',
borderRadius: 13,
paddingBottom: 9,
overflow: 'hidden',
elevation: 2,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.08,
shadowRadius: 4,
},

imageContainer: {
width: '100%',
height: 145,
backgroundColor: '#f7f7f7',
position: 'relative',
overflow: 'hidden',
},

image: {
width: '100%',
height: '100%',
resizeMode: 'cover',
},

discountBadge: {
position: 'absolute',
top: 7,
left: 7,
backgroundColor: '#ff6548',
borderRadius: 5,
paddingHorizontal: 6,
paddingVertical: 3,
},

discountText: {
color: '#fff',
fontSize: 9,
fontWeight: '700',
},

name: {
fontSize: 11,
fontWeight: '600',
color: '#222',
marginTop: 8,
marginHorizontal: 8,
minHeight: 28,
},

oldPrice: {
fontSize: 8,
color: '#aaa',
textDecorationLine: 'line-through',
marginHorizontal: 8,
marginTop: 2,
},

price: {
fontSize: 12,
fontWeight: '700',
color: '#111',
marginHorizontal: 8,
marginTop: 2,
},

center: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 20,
backgroundColor: '#fff',
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