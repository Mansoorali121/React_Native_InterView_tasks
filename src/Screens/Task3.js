import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Task3 = () => {
  const [show, setShow] = useState('Show');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShow(show === 'Show' ? 'Hide' : 'Show')}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
      <Text>{show}</Text>
    </View>
  );
};

export default Task3;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
  button: {
    backgroundColor: '#DDDDDD',
    height: 50,
    width: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 20,
  },
});
