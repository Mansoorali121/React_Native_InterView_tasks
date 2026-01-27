import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Text_Input_Display = () => {
  const [value, setvalue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Here Value"
          value={value}
          onChangeText={setvalue}
        />
        <Text style={styles.inputtext}>{value}</Text>
      </View>
    </View>
  );
};

export default Text_Input_Display;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {marginHorizontal: 20 },
  inputtext: { color: 'red', fontSize: 14, fontWeight: 'bold',marginStart:20 },
  input: {
    height: 40,
    width: 200,
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 0.6,
    marginBottom: 20
  },
});
