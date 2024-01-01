// Login.js
import React, { useState } from 'react';
import { StyleSheet, Image, View, SafeAreaView, KeyboardAvoidingView, Text, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showToast = (type, text1, text2) => {
    Toast.show({
      type: type,
      position: 'bottom',
      text1: text1,
      text2: text2,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
    });
  };

  const handleLogin = () => {
    if (!emailPattern.test(email)) {
      showToast('error', 'Erreur', 'Adresse email invalide');
      return;
    }

    if (password.length < 6) {
      showToast('error', 'Erreur', 'Mot de passe trop court');
      return;
    }

    // Perform login logic here
    // For demonstration purposes, assume the login is successful
    showToast('success', 'Succès', 'Connexion réusie');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View>
        <Image style={{ width: 150, height: 100 }} source={require('../Images/Manioc.jpg')} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Connectez votre compte</Text>
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="gray" marginLeft={10} />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Entrez votre email'
            style={styles.inputField}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={24} color="gray" marginLeft={10} />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder='Entrez votre mot de passe'
            style={styles.inputField}
          />
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text>Restez connecté</Text>
          <Text style={{ color: 'blue' }}>Mot de passe oublié</Text>
        </View>
        <Pressable onPress={handleLogin} style={styles.loginButton}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Se Connecter</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Premier')} style={{ marginTop: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 15, color: 'gray' }}>Je n'ai pas de compte? Inscrivez-vous</Text>
        </Pressable>
      </KeyboardAvoidingView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 50,
    paddingVertical: 'center',
    alignItems: 'center',
    backgroundColor: '#D0D0D0D0',
    borderRadius: 5,
  },
  inputField: {
    padding: 10,
    width: 300,
    height: 50,
    fontSize: 18,
  },
  loginButton: {
    marginTop: 50,
    backgroundColor: 'green',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
    width: 200,
    padding: 15,
  },
});

export default Login;
