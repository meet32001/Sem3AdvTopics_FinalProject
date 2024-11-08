// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, width: '100%' },
});
