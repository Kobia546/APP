import React, { useState } from 'react';
import { StyleSheet, Image, View, SafeAreaView, KeyboardAvoidingView, Text, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState('');
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

 const handleRegister = () => {
  if (!emailPattern.test(email)) {
    showToast('error', 'Erreur', 'Adresse email invalide');
    return;
  }

  if (password.length < 6) {
    showToast('error', 'Erreur', 'Mot de passe trop court');
    return;
  }

  if (password !== confirmPassword) {
    showToast('error', 'Erreur', 'Les mots de passe ne correspondent pas');
    return;
  }

  showToast('success', 'Succès', 'Inscription réussie');

  // If all validation checks pass, navigate to the "Principal" page
  navigation.navigate('Principal');
};


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View>
        <Image style={{ width: 150, height: 100 }} source={require('../Images/Manioc.jpg')} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Inscrivez-vous</Text>
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
        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={24} color="gray" marginLeft={10} />
          <TextInput
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            placeholder='Confirmez votre mot de passe'
            style={styles.inputField}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={24} color="gray" />
          <TextInput
            value={user}
            onChangeText={(text) => setUser(text)}
            placeholder='Entrez votre nom utilisateur'
            style={styles.inputField}
          />
        </View>
        <Pressable onPress={handleRegister}    style={styles.registerButton}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>S'inscrire</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')} style={{ marginTop: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 15, color: 'gray' }}>Vous avez déjà un compte? Connectez-vous</Text>
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
    marginTop: 15,
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
  registerButton: {
    marginTop: 50,
    backgroundColor: 'green',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
    width: 200,
    padding: 15,
  },
});

export default Register;


