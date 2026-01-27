import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Button_Disable_Logic = () => {
  const [value, setValue] = useState(0);
  const isDiabled = value === 0;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setValue(value + 1)}
      >
        <Text style={styles.btntext}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // disabled={isDiabled}
        style={[styles.button2, isDiabled && styles.disbalebutton]}
        onPress={() => setValue(value > 0 ? value - 1 : 0)}
      >
        <Text style={styles.btntext}>Decrease</Text>
      </TouchableOpacity>
      <Text>{value}</Text>
    </View>
  );
};

export default Button_Disable_Logic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    height: 50,
    width: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btntext: { color: 'blue', fontSize: 14, fontWeight: 'semibold' },
  disbalebutton: { opacity: 0.2 },
});
