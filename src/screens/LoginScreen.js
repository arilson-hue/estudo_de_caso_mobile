import React, { useState } from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from '../store/authSlice';

export default function LoginScreen() {
const dispatch = useDispatch();

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleLogin = () => {
if (!email || !senha) {
Alert.alert('Atenção', 'Preencha o e-mail e a senha.');
return;
}

dispatch(
  login({
    email,
  })
);

Alert.alert('Sucesso', 'Login realizado com sucesso!');

};

return (
<View style={styles.container}>
<View style={styles.content}>

    <View style={styles.iconContainer}>
      <Text style={styles.icon}>♧</Text>
    </View>

    <Text style={styles.title}>Catálogo Mobile</Text>

    <Text style={styles.subtitle}>
      Entre para explorar nossa coleção
    </Text>

    <View style={styles.form}>
      <Text style={styles.label}>E-MAIL</Text>

      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>SENHA</Text>

      <TextInput
        style={styles.input}
        placeholder="••••••••"
        placeholderTextColor="#999"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.features}>
      <Text style={styles.feature}>🔒 Seguro</Text>
      <Text style={styles.feature}>✓ Confiável</Text>
      <Text style={styles.feature}>⚡ Rápido</Text>
    </View>

  </View>
</View>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
},

content: {
paddingHorizontal: 42,
alignItems: 'center',
},

iconContainer: {
width: 54,
height: 54,
borderRadius: 14,
backgroundColor: '#111',
justifyContent: 'center',
alignItems: 'center',
marginBottom: 14,
},

icon: {
color: '#fff',
fontSize: 27,
},

title: {
fontSize: 20,
fontWeight: '700',
color: '#111',
},

subtitle: {
fontSize: 11,
color: '#999',
marginTop: 7,
marginBottom: 32,
},

form: {
width: '100%',
},

label: {
fontSize: 9,
fontWeight: '700',
color: '#888',
marginBottom: 6,
letterSpacing: 0.8,
},

input: {
width: '100%',
height: 44,
borderWidth: 1,
borderColor: '#e5e5e5',
borderRadius: 8,
backgroundColor: '#f8f8f8',
paddingHorizontal: 12,
fontSize: 12,
marginBottom: 17,
color: '#222',
},

forgot: {
alignSelf: 'flex-end',
fontSize: 9,
color: '#ff5a3c',
marginTop: -8,
marginBottom: 16,
},

button: {
height: 44,
backgroundColor: '#111',
borderRadius: 9,
justifyContent: 'center',
alignItems: 'center',
},

buttonText: {
color: '#fff',
fontSize: 13,
fontWeight: '700',
},

features: {
flexDirection: 'row',
justifyContent: 'center',
gap: 14,
marginTop: 25,
borderTopWidth: 1,
borderTopColor: '#eee',
paddingTop: 13,
width: '100%',
},

feature: {
fontSize: 8,
color: '#999',
},
});