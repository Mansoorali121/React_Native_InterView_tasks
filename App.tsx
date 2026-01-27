import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setValue(value + 1)}
      >
        <Text style={styles.btntext}>Press Me</Text>
      </TouchableOpacity>
      <Text>{value}</Text>
    </View>
  );
};

export default App;

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
  },
  btntext: { color: 'blue', fontSize: 14, fontWeight: 'semibold' },
});
