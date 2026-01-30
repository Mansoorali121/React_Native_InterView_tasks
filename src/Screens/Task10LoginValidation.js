import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const Task10LoginValidation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <View>
          <TextInput placeholder="Enter Name" style={styles.input} />
          <TextInput placeholder="Enter Name"  style={styles.input}/>
          <TextInput placeholder="Enter Name"  style={styles.input}/>
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
  input:{},
});
