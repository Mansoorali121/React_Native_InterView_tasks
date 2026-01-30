import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Task10LoginValidation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <View style={styles.inputcontainer}>
          <TextInput placeholder="Enter Name" style={styles.input} />
          <TextInput placeholder="Enter Email" style={styles.input} />
          <TextInput placeholder="Enter Password" style={styles.input} />
          <Text style={styles.forgettext}>Forgot Password? </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.registerbutton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Task10LoginValidation;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
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
