import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Task10LoginValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   Register User
  const registerUser = () => {
    if (!name) {
      Alert.alert('Name is Required: ');
    }
    if (!email) {
      Alert.alert('Email is Required: ');
    }
    if (!password || password.length < 6) {
      Alert.alert('Password length Should be Greater then 6 : ');
    } else {
      Alert.alert('User Registered Successfully: ');
      setEmail('');
      setPassword('');
      setName('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="Enter Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Enter Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.forgettext}>Forgot Password? </Text>
          <TouchableOpacity style={styles.button} onPress={registerUser}>
            <Text style={styles.registerbutton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Task10LoginValidation;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', marginTop: 200 },
  formcontainer: {
    backgroundColor: '#F17547',
    borderWidth: 1,
    height: 400,
    width: 350,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  inputcontainer: { alignItems: 'center', justifyContent: 'center' },
  input: {
    borderColor: '#F3F3F3',
    borderWidth: 1,
    borderRadius: 5,
    width: 317,
    height: 55,
    marginTop: 20,
    color: '#ffff',
  },
  button: {
    width: 317,
    height: 55,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#F83758',
    justifyContent: 'center',
  },
  registerbutton: { color: '#ffff', borderRadius: 20, fontSize: 14 },
  forgettext: { color: 'blue', marginLeft: 210, marginTop: 5 },
});
